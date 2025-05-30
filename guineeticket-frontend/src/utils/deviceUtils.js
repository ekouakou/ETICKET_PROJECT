// deviceUtils.js
import FingerprintJS from '@fingerprintjs/fingerprintjs';


export const getDeviceId = () => {
  let deviceId = localStorage.getItem('device_id');
  if (!deviceId) {
    deviceId = crypto.randomUUID(); // ou utilise un package comme uuid
    localStorage.setItem('device_id', deviceId);
  }
  return deviceId;
};



export const getFingerprint = async () => {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  return result.visitorId; // identifiant quasi unique
};