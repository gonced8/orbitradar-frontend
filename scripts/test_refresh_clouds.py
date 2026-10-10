import unittest

import numpy as np
from PIL import Image
from io import BytesIO

from refresh_clouds import render_cloud_texture


class CloudTextureTests(unittest.TestCase):
    def test_rolls_zero_longitude_to_texture_center_boundary(self):
        values = np.zeros((180, 360), dtype=np.float32)
        values[:, 180] = 100
        image = Image.open(BytesIO(render_cloud_texture(values, 360, 180)))
        alpha = np.asarray(image)[..., 3]
        self.assertGreater(alpha[:, 0].mean(), 0)
        self.assertLess(alpha[:, 180].mean(), 1)

    def test_clear_sky_is_transparent_and_overcast_is_white(self):
        values = np.zeros((180, 360), dtype=np.float32)
        values[:, 180] = 100
        image = Image.open(BytesIO(render_cloud_texture(values, 360, 180)))
        pixels = np.asarray(image)
        self.assertGreater(int(pixels[0, 0, 3]), 150)
        self.assertEqual(int(pixels[0, 180, 3]), 0)
        self.assertEqual(tuple(pixels[0, 0, :3]), (255, 255, 255))

    def test_rejects_partial_grid(self):
        with self.assertRaises(ValueError):
            render_cloud_texture(np.zeros((2, 2), dtype=np.float32))


if __name__ == "__main__":
    unittest.main()
