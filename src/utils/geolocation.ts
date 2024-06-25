// utils/geolocation.ts
interface UserLocation {
    lat: number;
    lng: number;
}

export const getUserLocation = (): Promise<UserLocation> => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ lat: latitude, lng: longitude });
                },
                (error) => {
                    reject('Error getting geolocation: ' + error.message);
                }
            );
        } else {
            reject('Geolocation not supported by this browser.');
        }
    });
};
