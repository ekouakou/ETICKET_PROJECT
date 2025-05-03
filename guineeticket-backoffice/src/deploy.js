const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "zkmoqvh01qh6",
  password: "Eticket2024$",
  host: "132.148.179.241", // ou ftp.nomdedomaine.com
  port: 21,
  localRoot: __dirname + "/build",
  remoteRoot: "/public_html/guineeticket.com/eticketAdmin", // ou autre selon ton hébergement
  include: ["*", "**/*"],
  deleteRemote: true, // supprime les anciens fichiers
  forcePasv: true
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("Déploiement terminé !"))
  .catch(err => console.error("Erreur de déploiement:", err));
