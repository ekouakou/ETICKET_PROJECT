-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : sam. 11 jan. 2025 à 17:49
-- Version du serveur : 5.7.39
-- Version de PHP : 7.4.33

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `eticket_db`
--

DELIMITER $$
--
-- Procédures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_snapshotoperationcaday` ()  NO SQL begin 
declare lgopeid varchar(40);
declare lgsocid varchar(40);

declare done int default 0;

declare snapshotnotin cursor for 

select distinct t.lg_opeid, s.lg_socid
from transaction t, societe_utilisateur su, societe s
where t.lg_sutid = su.lg_sutid and su.lg_socid = s.lg_socid
and date(t.dt_tracreated) = current_date
and t.str_trastatut = 'enable'
and not exists (select sn.lg_opeid, sn.lg_socid from snapshotcaday sn where date(sn.dt_scaday) = current_date);

declare snapshotin cursor for 
select distinct t.lg_opeid, s.lg_socid
from transaction t, societe_utilisateur su, societe s
where t.lg_sutid = su.lg_sutid and su.lg_socid = s.lg_socid
and date(t.dt_tracreated) = current_date 
and t.str_trastatut = 'enable'
and exists (select sn.lg_opeid, sn.lg_socid from snapshotcaday sn where date(sn.dt_scaday) = current_date);

declare continue handler for not found set done=1;


open snapshotnotin;
snapshotnotin_loop:loop
fetch snapshotnotin into lgopeid, lgsocid;
if done=1 then 
 leave snapshotnotin_loop;
 end if;
 
 insert into snapshotcaday values (concat(lgsocid, lgopeid, date_format(current_date, "%d%m%y")),lgsocid,current_date,null,now(),'enable',0,0, lgopeid);
end loop snapshotnotin_loop;
close snapshotnotin;
 

set done=0;
open snapshotin;
snapshotin_loop:loop
fetch snapshotin into lgopeid, lgsocid;
if done=1 then 
 leave snapshotin_loop;
 end if;
 
 call proc_snapshottransactioncaday(lgopeid, lgsocid);
end loop snapshotin_loop;
close snapshotin;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_snapshottransactioncaday` (IN `lgopeid` VARCHAR(40) charset utf8, IN `lgsocid` VARCHAR(40) charset utf8)  NO SQL begin 
declare dblamount numeric(12);
declare total_transaction int(11);


declare done int default 0;

declare curbl cursor for 

	select coalesce(sum(t.dbl_traamount),0) dbl_traamount, count(t.lg_traid) nombre
from transaction t, societe_utilisateur su, societe s
where t.lg_sutid = su.lg_sutid and su.lg_socid = s.lg_socid
and date(t.dt_tracreated) = current_date 
and t.str_trastatut = 'enable'
and t.lg_opeid = lgopeid and s.lg_socid = lgsocid
group by t.lg_opeid, s.lg_socid;


declare continue handler for not found set done=1;

set total_transaction=0;

open curbl;
bl_loop:loop
fetch curbl into dblamount,total_transaction;
if done=1 then 
 leave bl_loop;
 end if;
 
update snapshotcaday t set t.dbl_scaamount = dblamount, t.int_scanumber = total_transaction, dt_sopupdated = now() where t.lg_socid = lgsocid and t.lg_opeid = lgopeid and date(t.dt_scaday) = current_date;

end loop bl_loop;
 close curbl;
end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `abonnement`
--

CREATE TABLE `abonnement` (
  `lg_aboid` varchar(40) NOT NULL,
  `lg_socid` varchar(40) NOT NULL,
  `dt_abobegin` timestamp NULL DEFAULT NULL,
  `dt_aboend` timestamp NULL DEFAULT NULL,
  `dt_aboupdated` timestamp NULL DEFAULT NULL,
  `dt_abocreated` timestamp NULL DEFAULT NULL,
  `str_abostatut` varchar(20) DEFAULT 'enable',
  `int_aboamount` int(11) DEFAULT '0' COMMENT 'montant de l''abonnement'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `agence`
--

CREATE TABLE `agence` (
  `lg_ageid` varchar(40) NOT NULL,
  `str_agename` varchar(20) DEFAULT NULL,
  `str_agedescription` varchar(100) DEFAULT NULL,
  `lg_socid` varchar(40) NOT NULL,
  `str_agelocalisation` varchar(100) DEFAULT NULL,
  `dt_agecreated` datetime DEFAULT NULL,
  `dt_ageupdated` datetime DEFAULT NULL,
  `lg_uticreatedid` varchar(40) DEFAULT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_agestatut` varchar(20) DEFAULT NULL,
  `lg_lstid` varchar(40) DEFAULT NULL COMMENT 'Ville du lavage',
  `str_agephone` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `agence`
--

INSERT INTO `agence` (`lg_ageid`, `str_agename`, `str_agedescription`, `lg_socid`, `str_agelocalisation`, `dt_agecreated`, `dt_ageupdated`, `lg_uticreatedid`, `lg_utiupdatedid`, `str_agestatut`, `lg_lstid`, `str_agephone`) VALUES
('1', 'Lavage Cleaner', 'Lavage Cleaner', '1', 'Angré, 7ème tranche', '2023-08-13 00:00:00', NULL, '', NULL, 'enable', '', '0141513892'),
('2', 'Marange Boutik', 'Marange Boutik', '1', 'Cocody', '2023-08-13 00:00:00', NULL, '', NULL, 'enable', '', '0203040506');

-- --------------------------------------------------------

--
-- Structure de la table `banniere`
--

CREATE TABLE `banniere` (
  `lg_banid` varchar(40) NOT NULL,
  `str_banname` varchar(150) DEFAULT NULL,
  `str_bandescription` varchar(1000) DEFAULT NULL,
  `lg_ageid` varchar(40) NOT NULL,
  `str_banpath` varchar(150) DEFAULT NULL,
  `dt_bancreated` datetime DEFAULT NULL,
  `dt_banupdated` datetime DEFAULT NULL,
  `dt_banbegin` date DEFAULT NULL,
  `dt_banend` date DEFAULT NULL,
  `lg_uticreatedid` varchar(40) DEFAULT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_banstatut` varchar(20) DEFAULT NULL,
  `lg_eveid` varchar(40) DEFAULT NULL COMMENT 'ID evenement',
  `bool_banevent` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `banniere`
--

INSERT INTO `banniere` (`lg_banid`, `str_banname`, `str_bandescription`, `lg_ageid`, `str_banpath`, `dt_bancreated`, `dt_banupdated`, `dt_banbegin`, `dt_banend`, `lg_uticreatedid`, `lg_utiupdatedid`, `str_banstatut`, `lg_eveid`, `bool_banevent`) VALUES
('YtugcQcfig0UseQPNfHHV6WvCjoSCR9sz2CWDcO3', 'Tournoi basket 2024', 'Finale de basket interbacket', '1', '1726851547-images-2.jpeg', '2024-09-20 16:59:07', NULL, '2024-09-12', '2024-09-28', '1', NULL, 'enable', '1nY0YJVHCJcX6QY1464RclCIlPxpRSl3IIgKO0Wo', 0);

-- --------------------------------------------------------

--
-- Structure de la table `cashtransaction`
--

CREATE TABLE `cashtransaction` (
  `lg_ctrid` varchar(40) NOT NULL,
  `str_ctrref` varchar(60) NOT NULL,
  `dbl_ctramount` int(11) NOT NULL,
  `dbl_ctrreceive` int(11) NOT NULL,
  `dbl_ctrmonnaie` int(11) NOT NULL,
  `str_ctrsensoperation` varchar(5) NOT NULL,
  `str_refmoyenpaiement` varchar(50) DEFAULT NULL,
  `dt_ctrcreated` datetime DEFAULT NULL,
  `dt_ctrupdated` datetime DEFAULT NULL,
  `lg_uticreatedid` varchar(40) NOT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_ctrstatut` varchar(20) DEFAULT NULL,
  `lg_ageid` varchar(40) NOT NULL,
  `str_ctrname` varchar(700) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `lg_cliid` varchar(40) NOT NULL,
  `str_clifirstlastname` varchar(150) DEFAULT NULL,
  `str_cliphone` varchar(20) DEFAULT NULL,
  `str_climail` varchar(150) DEFAULT NULL,
  `dt_clicreated` timestamp NULL DEFAULT NULL,
  `dt_cliupdated` timestamp NULL DEFAULT NULL,
  `str_clistatut` varchar(20) DEFAULT 'enable',
  `str_clilogin` varchar(40) DEFAULT NULL,
  `dt_clilastconnected` timestamp NULL DEFAULT NULL,
  `dt_clilastpasschanged` timestamp NULL DEFAULT NULL,
  `str_clitoken` varchar(120) DEFAULT NULL,
  `str_clipassword` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`lg_cliid`, `str_clifirstlastname`, `str_cliphone`, `str_climail`, `dt_clicreated`, `dt_cliupdated`, `str_clistatut`, `str_clilogin`, `dt_clilastconnected`, `dt_clilastpasschanged`, `str_clitoken`, `str_clipassword`) VALUES
('1Sn4di9set9N5NBkAJcg', '254316624371264', '254316624371264', '', '2024-08-04 01:19:11', NULL, 'enable', '254316624371264', NULL, NULL, NULL, '7aa57639fcdf468c6badea59dff6205490bf4609'),
('4DLl60l0ptz7dl1SoXjs', '23156234612534', '23156234612534', '', '2024-08-04 01:36:43', NULL, 'enable', '23156234612534', NULL, NULL, NULL, '42f3f70529e731057f794c0d2c712c5b36bc5ca5'),
('4EfsG7yYuFKxve84Puif', 'Martial NGBEADEGO', '0140700305', 'martial.ngbeadego@nkm-technology.net', '2024-08-19 07:17:20', NULL, 'enable', '0140700305', NULL, NULL, NULL, '9ecea178e7fa3ab40bf2b0b47bd0b0ab31b1beda'),
('7BzPOoFFhSB7lsMLPQMW', '213612341', '213612341', '', '2024-08-04 01:40:22', NULL, 'enable', '213612341', NULL, NULL, NULL, '5ab2b9e246342cead45869191ba69a625d1d068c'),
('9JPXqJJrrLtrxCI6v8sa', '6423413741', '6423413741', '', '2024-08-04 01:58:56', NULL, 'enable', '6423413741', NULL, NULL, NULL, '5a08342c18b5896b8e11b1a8387215e38e892c0f'),
('9qL9y400cFftqWycFkvr', '224669004701', '224669004701', '', '2024-07-23 02:44:45', NULL, 'enable', '224669004701', NULL, NULL, NULL, 'a3163b7935e1d7c8f0fb32ed0cd957e1e3bf7518'),
('bS6RIioRUoS69pfeAh6Z', '13643172434172', '13643172434172', '', '2024-08-04 01:32:55', NULL, 'enable', '13643172434172', NULL, NULL, NULL, 'f97a1393bb3debd66960700e3278483ac8e1f001'),
('fE0NXMgg437gcM9ApknJ', '6731431374517', '6731431374517', '', '2024-08-03 23:38:22', NULL, 'enable', '6731431374517', NULL, NULL, NULL, '5adfb5fc7d23ad7b8c3370640f67f97a450f0fcc'),
('fwT7GEku7JJUuL6ss0Yf', '23125351623712', '23125351623712', '', '2024-08-04 01:53:44', NULL, 'enable', '23125351623712', NULL, NULL, NULL, 'e930231b6943fe0f9450f847e8736b378013697b'),
('GN9DytP0dnRsnEtDMsMY', '632746734267314', '632746734267314', '', '2024-08-03 23:39:07', NULL, 'enable', '632746734267314', NULL, NULL, NULL, '944419cdf92e667b4ba1a1f6ffd555e685730e71'),
('GrOHKR3NEJwpNfNgMweY', '2543126312', '2543126312', '', '2024-08-04 00:47:49', NULL, 'enable', '2543126312', NULL, NULL, NULL, '031328bca325316b8b5c18ab39222b831590020e'),
('kLYG6qBlpboRAHTbEfqQ', '253461246371', '253461246371', '', '2024-08-04 01:28:14', NULL, 'enable', '253461246371', NULL, NULL, NULL, '0f3bf9613509c46025a0f964727fa54c0105c7de'),
('mj24A53pzlujKrEOwCoR', '6347263472', '6347263472', '', '2024-08-04 02:10:09', NULL, 'enable', '6347263472', NULL, NULL, NULL, '960c9f0ee83e3248e1df3b7d98db32dae652a070'),
('NiY0D985uSuT6t4Kc37y', '6313341343', '6313341343', '', '2024-08-04 00:32:12', NULL, 'enable', '6313341343', NULL, NULL, NULL, '29b160d41fa7849c29756f04ed0172453718482c'),
('nTJIKSVcaGwSyXaDRiBY', 'Martial NGBEADEGO', '0102030405', 'contact@guineeticket.com', '2024-08-21 04:26:31', NULL, 'enable', '0102030405', NULL, NULL, NULL, '9f4d2b3c21b56ade577d5c2590385c3649a9c5d2'),
('osD9I2HOfagVX9bvdCsb', 'Martial NGBEADEGO', '622888069', 'contact@guineeticket.com', '2024-08-26 03:35:45', NULL, 'enable', '622888069', NULL, NULL, NULL, 'd20ab0aa717d2e0ba050a70c2f427399eff9ca1f'),
('qGbpUeSJ3UZo4mrBsY7H', '0749345289', '0749345289', 'ekouakou1er@gmail.com', '2024-07-28 04:31:10', NULL, 'enable', '0749345289', NULL, NULL, NULL, 'e0df2be43afbb18026ff4dff8f169028e5cb70c8'),
('sd6RYtXagLbxyWyVk3LJ', '42563436274723', '42563436274723', '', '2024-08-04 00:52:59', NULL, 'enable', '42563436274723', NULL, NULL, NULL, 'c38f409c807d380e64c19d54482defc388510dfb'),
('svYZMaVaBfxXg1GU68uh', '236472378A4238', '236472378A4238', '', '2024-08-04 02:13:50', NULL, 'enable', '236472378A4238', NULL, NULL, NULL, '9fdc17befe9da2722719f7faf7313b37650fb446'),
('swDYnyYdqAqNVn6S0oJd', '224622888069', '224622888069', '', '2024-09-21 04:02:27', NULL, 'enable', '224622888069', NULL, NULL, NULL, '692d7fbf9795156030f35d099fe053e301faa60e'),
('SXffFxGySIAD4uL2JNl1', '0141513892', '0141513892', 'ngbeadego.martial@gmail.com', '2024-07-28 04:41:26', NULL, 'enable', '0141513892', '2024-11-15 20:17:46', NULL, 'fQxQmL0UPyzrnAiMIlIJ', '39dfa55283318d31afe5a3ff4a0e3253e2045e43'),
('wFsEL1bfNYG3RRFx3kfS', '25364127312', '25364127312', '', '2024-08-04 02:04:40', NULL, 'enable', '25364127312', NULL, NULL, NULL, '6180a73dae05f60c898e8bd4ec1275e6dc09c709'),
('WXtiwYN2maRdQGBZzafk', '0506566197', '0506566197', '', '2024-07-18 09:29:36', NULL, 'enable', '0506566197', NULL, NULL, NULL, '6bed69424e57106a94e59556ab082a46bb60b6b4'),
('x0amIVbH32XprnY0PwNX', '2240141513892', '2240141513892', 'ngbeadego.martial@gmail.com', '2024-07-28 04:50:03', NULL, 'enable', '2240141513892', NULL, NULL, NULL, '69fe6584db70a23d3e9533e1eb1f8b9499a957f1'),
('XKbkLupErvCqJhlyrZmA', '6431A63441263', '6431A63441263', '', '2024-08-04 01:39:40', NULL, 'enable', '6431A63441263', NULL, NULL, NULL, 'a84b240a2db1a9d9a4a2d55b38b6e462d1259a11'),
('YjDhz0RBdJ7xHWAIirHH', '67427342231', '67427342231', '', '2024-08-04 01:14:52', NULL, 'enable', '67427342231', NULL, NULL, NULL, 'd1bb02db9adf9b17723cd24e386d2a0aec7b56ce'),
('yOyWWOuFFbbv05ZymW0c', '', '', '', '2024-07-28 04:47:10', NULL, 'enable', '', NULL, NULL, NULL, '63b70ff8c496f561fe068b96384d6b64f6ec10ef'),
('YQivTvx7AzTmflZLy56p', '234551263712', '234551263712', '', '2024-08-04 02:01:58', NULL, 'enable', '234551263712', NULL, NULL, NULL, '523a45ed3c4a9642588ec58eea312dfe7cacc85e');

-- --------------------------------------------------------

--
-- Structure de la table `eveliste`
--

CREATE TABLE `eveliste` (
  `lg_eliid` varchar(40) NOT NULL,
  `lg_eveid` varchar(40) NOT NULL,
  `lg_lstid` varchar(40) NOT NULL,
  `int_elinumber` double NOT NULL COMMENT 'nombre de la ticket',
  `int_elinumbermax` double NOT NULL COMMENT 'nombre maximum de la ticket',
  `dbl_eliamount` double NOT NULL COMMENT 'montant de la ticket',
  `dt_elicreated` datetime DEFAULT NULL,
  `dt_eliupdated` datetime DEFAULT NULL,
  `lg_uticreatedid` varchar(40) NOT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_elistatut` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `eveliste`
--

INSERT INTO `eveliste` (`lg_eliid`, `lg_eveid`, `lg_lstid`, `int_elinumber`, `int_elinumbermax`, `dbl_eliamount`, `dt_elicreated`, `dt_eliupdated`, `lg_uticreatedid`, `lg_utiupdatedid`, `str_elistatut`) VALUES
('6QVh9nF47ZJL7HDE0hINwgwnjcPm8YicB66AhIGE', '1nY0YJVHCJcX6QY1464RclCIlPxpRSl3IIgKO0Wo', '0000000000000000000000000000000000000801', 300, 3, 4000, '2024-09-20 16:59:07', NULL, '1', NULL, 'enable'),
('duQIOu5QTScvrJNEOeFjkPuDXritRu1J5nPhm8BH', 'iTMhYzQgbbNcUTKE6irHaBuHKqCy0NOIdHCx880W', '0000000000000000000000000000000000000802', 5000, 3, 2000, '2024-09-20 17:12:34', NULL, '1', NULL, 'enable'),
('Htp17LNa8RVSvJbGnCAvSL2W6Zm7LDDaG20AK9Wi', 'iTMhYzQgbbNcUTKE6irHaBuHKqCy0NOIdHCx880W', '0000000000000000000000000000000000000801', 200, 3, 5000, '2024-09-20 17:12:34', NULL, '1', NULL, 'enable');

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE `evenement` (
  `lg_eveid` varchar(40) NOT NULL,
  `lg_lstid` varchar(40) NOT NULL,
  `str_evename` varchar(150) NOT NULL,
  `str_evedescription` varchar(1000) NOT NULL,
  `lg_ageid` varchar(40) NOT NULL DEFAULT '1',
  `lg_lstplaceid` varchar(40) NOT NULL COMMENT 'lieu',
  `dt_evebegin` date NOT NULL,
  `dt_eveend` date NOT NULL,
  `hr_evebegin` varchar(10) NOT NULL,
  `hr_eveend` varchar(10) DEFAULT NULL,
  `str_evepic` varchar(150) DEFAULT NULL,
  `str_evebanner` varchar(150) DEFAULT NULL,
  `dt_eveupdated` timestamp NULL DEFAULT NULL,
  `dt_evecreated` timestamp NULL DEFAULT NULL,
  `str_evestatut` varchar(20) DEFAULT 'enable',
  `str_eveannonceur` varchar(150) NOT NULL,
  `lg_uticreatedid` varchar(40) NOT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_evedisplayroom` varchar(5) DEFAULT '0' COMMENT '1: affichage de salle, 0: pas d''affichage pour l''achat de ticket',
  `str_evestatutfree` varchar(5) DEFAULT '0' COMMENT '1: Evenement payant, 0: gratuit',
  `int_evenumberread` int(11) NOT NULL,
  `str_eveannonceurpic` varchar(150) NOT NULL,
  `str_annonceur` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `evenement`
--

INSERT INTO `evenement` (`lg_eveid`, `lg_lstid`, `str_evename`, `str_evedescription`, `lg_ageid`, `lg_lstplaceid`, `dt_evebegin`, `dt_eveend`, `hr_evebegin`, `hr_eveend`, `str_evepic`, `str_evebanner`, `dt_eveupdated`, `dt_evecreated`, `str_evestatut`, `str_eveannonceur`, `lg_uticreatedid`, `lg_utiupdatedid`, `str_evedisplayroom`, `str_evestatutfree`, `int_evenumberread`, `str_eveannonceurpic`, `str_annonceur`) VALUES
('1nY0YJVHCJcX6QY1464RclCIlPxpRSl3IIgKO0Wo', '0000000000000000000000000000000000000787', 'Tournoi basket 2024', 'Finale de basket interbacket', '1', '0000000000000000000000000000000000000803', '2024-09-21', '2024-09-21', '16:00', '20:00', '1726851547-images-3.jpeg', '1726851547-images-2.jpeg', '2024-09-21 00:01:15', '2024-09-20 23:59:07', 'enable', 'Ylou le boss', '1', '1', '0', '1', 0, '', ''),
('iTMhYzQgbbNcUTKE6irHaBuHKqCy0NOIdHCx880W', '0000000000000000000000000000000000000787', 'Journee du banquier', 'Test du tournoi de basket', '1', '0000000000000000000000000000000000000805', '2024-09-27', '2024-09-27', '08:00', '16:30', '1726852354-7ea512e7b095e1cc965a1d43581272b7.jpg', '', '2024-09-21 00:12:56', '2024-09-21 00:11:48', 'enable', 'Dj Pone Gros', '1', '1', '0', '1', 0, '', '');

-- --------------------------------------------------------

--
-- Structure de la table `liste`
--

CREATE TABLE `liste` (
  `lg_lstid` varchar(40) NOT NULL,
  `lg_tylid` varchar(40) NOT NULL,
  `str_lstdescription` varchar(200) DEFAULT NULL,
  `str_lstvalue` varchar(4000) DEFAULT NULL,
  `str_lstothervalue` varchar(100) DEFAULT NULL,
  `dt_lstcreated` datetime DEFAULT NULL,
  `lg_uticreatedid` varchar(40) NOT NULL,
  `str_lststatut` varchar(20) DEFAULT NULL,
  `str_lstothervalue1` varchar(100) DEFAULT NULL,
  `str_lstothervalue2` varchar(100) DEFAULT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `dt_lstupdated` datetime DEFAULT NULL,
  `str_lstothervalue3` varchar(100) DEFAULT NULL,
  `str_lstothervalue4` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `liste`
--

INSERT INTO `liste` (`lg_lstid`, `lg_tylid`, `str_lstdescription`, `str_lstvalue`, `str_lstothervalue`, `dt_lstcreated`, `lg_uticreatedid`, `str_lststatut`, `str_lstothervalue1`, `str_lstothervalue2`, `lg_utiupdatedid`, `dt_lstupdated`, `str_lstothervalue3`, `str_lstothervalue4`) VALUES
('0000000000000000000000000000000000000533', '3', 'RUSSIE', 'RU', 'RUS', '2023-09-24 17:23:31', '1', 'enable', '643', 'C0000000182', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000534', '3', 'RWANDA', 'RW', 'RWA', '2023-09-24 17:23:31', '1', 'enable', '646', 'C0000000183', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000535', '3', 'SAINT-BARTHÉLEMY', 'BL', 'BLM', '2023-09-24 17:23:31', '1', 'enable', '652', 'C0000000184', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000536', '3', 'SAINTE-HÉLÈNE, ASCENSION ET TRISTAN DA CUNHA', 'SH', 'SHN', '2023-09-24 17:23:31', '1', 'enable', '654', 'C0000000185', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000537', '3', 'SAINT-KITTS-ET-NEVIS', 'KN', 'KNA', '2023-09-24 17:23:31', '1', 'enable', '659', 'C0000000186', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000538', '3', 'SAINTE-LUCIE', 'LC', 'LCA', '2023-09-24 17:23:31', '1', 'enable', '662', 'C0000000187', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000539', '3', 'SAINT-MARTIN', 'MF', 'MAF', '2023-09-24 17:23:31', '1', 'enable', '663', 'C0000000188', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000540', '3', 'SAINT-PIERRE-ET-MIQUELON', 'PM', 'SPM', '2023-09-24 17:23:31', '1', 'enable', '666', 'C0000000189', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000541', '3', 'SAINT-VINCENT-ET-LES GRENADINES', 'VC', 'VCT', '2023-09-24 17:23:31', '1', 'enable', '670', 'C0000000190', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000542', '3', 'SAMOA', 'WS', 'WSM', '2023-09-24 17:23:31', '1', 'enable', '882', 'C0000000191', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000543', '3', 'SAINT-MARIN', 'SM', 'SMR', '2023-09-24 17:23:31', '1', 'enable', '674', 'C0000000192', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000544', '3', 'SAO TOMÉ-ET-PRINCIPE', 'ST', 'STP', '2023-09-24 17:23:31', '1', 'enable', '678', 'C0000000193', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000545', '3', 'ARABIE SAOUDITE', 'SA', 'SAU', '2023-09-24 17:23:31', '1', 'enable', '682', 'C0000000194', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000546', '3', 'SÉNÉGAL', 'SN', 'SEN', '2023-09-24 17:23:31', '1', 'enable', '686', '1', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000547', '3', 'SERBIE', 'RS', 'SRB', '2023-09-24 17:23:31', '1', 'enable', '688', 'C0000000196', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000548', '3', 'SEYCHELLES', 'SC', 'SYC', '2023-09-24 17:23:31', '1', 'enable', '690', 'C0000000197', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000549', '3', 'SIERRA LEONE', 'SL', 'SLE', '2023-09-24 17:23:31', '1', 'enable', '694', 'C0000000198', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000550', '3', 'SINGAPOUR', 'SG', 'SGP', '2023-09-24 17:23:31', '1', 'enable', '702', 'C0000000199', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000551', '3', 'SAINT-MARTIN', 'SX', 'SXM', '2023-09-24 17:23:31', '1', 'enable', '534', 'C0000000200', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000552', '3', 'SLOVAQUIE', 'SK', 'SVK', '2023-09-24 17:23:31', '1', 'enable', '703', 'C0000000201', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000553', '3', 'SLOVÉNIE', 'SI', 'SVN', '2023-09-24 17:23:31', '1', 'enable', '705', 'C0000000202', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000554', '3', 'SALOMON', 'SB', 'SLB', '2023-09-24 17:23:31', '1', 'enable', '090', 'C0000000203', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000555', '3', 'SOMALIE', 'SO', 'SOM', '2023-09-24 17:23:31', '1', 'enable', '706', 'C0000000204', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000556', '3', 'AFRIQUE DU SUD', 'ZA', 'ZAF', '2023-09-24 17:23:31', '1', 'enable', '710', 'C0000000205', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000557', '3', 'GÉORGIE DU SUD-ET-LES ÎLES SANDWICH DU SUD', 'GS', 'SGS', '2023-09-24 17:23:31', '1', 'enable', '239', 'C0000000206', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000558', '3', 'SOUDAN DU SUD', 'SS', 'SSD', '2023-09-24 17:23:31', '1', 'enable', '728', 'C0000000207', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000559', '3', 'ESPAGNE', 'ES', 'ESP', '2023-09-24 17:23:31', '1', 'enable', '724', 'C0000000208', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000560', '3', 'SRI LANKA', 'LK', 'LKA', '2023-09-24 17:23:31', '1', 'enable', '144', 'C0000000209', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000561', '3', 'SOUDAN', 'SD', 'SDN', '2023-09-24 17:23:31', '1', 'enable', '729', 'C0000000210', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000562', '3', 'SURINAME', 'SR', 'SUR', '2023-09-24 17:23:31', '1', 'enable', '740', 'C0000000211', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000563', '3', 'SVALBARD ET L\'ÎLE JAN MAYEN', 'SJ', 'SJM', '2023-09-24 17:23:31', '1', 'enable', '744', 'C0000000212', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000564', '3', 'SWAZILAND', 'SZ', 'SWZ', '2023-09-24 17:23:31', '1', 'enable', '748', 'C0000000213', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000565', '3', 'SUÈDE', 'SE', 'SWE', '2023-09-24 17:23:31', '1', 'enable', '752', 'C0000000214', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000566', '3', 'SUISSE', 'CH', 'CHE', '2023-09-24 17:23:31', '1', 'enable', '756', 'C0000000215', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000567', '3', 'RÉPUBLIQUE ARABE SYRIENNE', 'SY', 'SYR', '2023-09-24 17:23:31', '1', 'enable', '760', 'C0000000216', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000568', '3', 'TAÏWAN', 'TW', 'TWN', '2023-09-24 17:23:31', '1', 'enable', '158', 'C0000000217', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000569', '3', 'TADJIKISTAN', 'TJ', 'TJK', '2023-09-24 17:23:31', '1', 'enable', '762', 'C0000000218', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000570', '3', 'TANZANIE, RÉPUBLIQUE-UNIE DE', 'TZ', 'TZA', '2023-09-24 17:23:31', '1', 'enable', '834', 'C0000000219', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000571', '3', 'TIMOR-LESTE', 'TL', 'TLS', '2023-09-24 17:23:31', '1', 'enable', '626', 'C0000000220', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000572', '3', 'TOGO', 'TG', 'TGO', '2023-09-24 17:23:31', '1', 'enable', '768', 'C0000000221', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000573', '3', 'TOKELAU', 'TK', 'TKL', '2023-09-24 17:23:31', '1', 'enable', '772', 'C0000000222', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000574', '3', 'TONGA', 'TO', 'TON', '2023-09-24 17:23:31', '1', 'enable', '776', 'C0000000223', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000575', '3', 'TRINITÉ-ET-TOBAGO', 'TT', 'TTO', '2023-09-24 17:23:31', '1', 'enable', '780', 'C0000000224', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000576', '3', 'TUNISIE', 'TN', 'TUN', '2023-09-24 17:23:31', '1', 'enable', '788', 'C0000000225', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000577', '3', 'TURQUIE', 'TR', 'TUR', '2023-09-24 17:23:31', '1', 'enable', '792', 'C0000000226', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000578', '3', 'TURKMÉNISTAN', 'TM', 'TKM', '2023-09-24 17:23:31', '1', 'enable', '795', 'C0000000227', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000579', '3', 'TURKS-ET-CAÏCOS', 'TC', 'TCA', '2023-09-24 17:23:31', '1', 'enable', '796', 'C0000000228', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000580', '3', 'TUVALU', 'TV', 'TUV', '2023-09-24 17:23:31', '1', 'enable', '798', 'C0000000229', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000581', '3', 'OUGANDA', 'UG', 'UGA', '2023-09-24 17:23:31', '1', 'enable', '800', 'C0000000230', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000582', '3', 'UKRAINE', 'UA', 'UKR', '2023-09-24 17:23:31', '1', 'enable', '804', 'C0000000231', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000583', '3', 'ÉMIRATS ARABES UNIS', 'AE', 'ARE', '2023-09-24 17:23:31', '1', 'enable', '784', 'C0000000232', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000584', '3', 'ROYAUME-UNI DE GRANDE-BRETAGNE ET D\'IRLANDE DU NORD', 'GB', 'GBR', '2023-09-24 17:23:31', '1', 'enable', '826', 'C0000000233', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000585', '3', 'ÎLES MINEURES ÉLOIGNÉES DES ÉTATS-UNIS', 'UM', 'UMI', '2023-09-24 17:23:31', '1', 'enable', '581', 'C0000000234', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000586', '3', 'ÉTATS-UNIS D\'AMÉRIQUE', 'US', 'USA', '2023-09-24 17:23:31', '1', 'enable', '840', 'C0000000235', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000587', '3', 'URUGUAY', 'UY', 'URY', '2023-09-24 17:23:31', '1', 'enable', '858', 'C0000000236', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000588', '3', 'OUZBÉKISTAN', 'UZ', 'UZB', '2023-09-24 17:23:31', '1', 'enable', '860', 'C0000000237', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000589', '3', 'VANUATU', 'VU', 'VUT', '2023-09-24 17:23:31', '1', 'enable', '548', 'C0000000238', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000590', '3', 'VENEZUELA', 'VE', 'VEN', '2023-09-24 17:23:31', '1', 'enable', '862', 'C0000000239', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000591', '3', 'VIET NAM', 'VN', 'VNM', '2023-09-24 17:23:31', '1', 'enable', '704', 'C0000000240', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000592', '3', 'VIERGES BRITANNIQUES', 'VG', 'VGB', '2023-09-24 17:23:31', '1', 'enable', '092', 'C0000000241', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000593', '3', 'VIERGES DES ÉTATS-UNIS', 'VI', 'VIR', '2023-09-24 17:23:31', '1', 'enable', '850', 'C0000000242', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000594', '3', 'WALLIS-ET-FUTUNA', 'WF', 'WLF', '2023-09-24 17:23:31', '1', 'enable', '876', 'C0000000243', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000595', '3', 'SAHARA OCCIDENTAL', 'EH', 'ESH', '2023-09-24 17:23:31', '1', 'enable', '732', 'C0000000244', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000596', '3', 'YÉMEN', 'YE', 'YEM', '2023-09-24 17:23:31', '1', 'enable', '887', 'C0000000245', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000597', '3', 'ZAMBIE', 'ZM', 'ZMB', '2023-09-24 17:23:31', '1', 'enable', '894', 'C0000000246', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000598', '3', 'ZIMBABWE', 'ZW', 'ZWE', '2023-09-24 17:23:31', '1', 'enable', '716', 'C0000000247', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000599', '3', 'ALGÉRIE', 'DZ', 'DZA', '2023-09-24 17:23:31', '1', 'enable', '012', 'C0000000004', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000600', '3', 'SAMOA AMÉRICAINES', 'AS', 'ASM', '2023-09-24 17:23:31', '1', 'enable', '016', 'C0000000005', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000601', '3', 'ANDORRE', 'AD', 'AND', '2023-09-24 17:23:31', '1', 'enable', '020', 'C0000000006', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000602', '3', 'ANGOLA', 'AO', 'AGO', '2023-09-24 17:23:31', '1', 'enable', '024', 'C0000000007', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000603', '3', 'ANGUILLA', 'AI', 'AIA', '2023-09-24 17:23:31', '1', 'enable', '660', 'C0000000008', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000604', '3', 'ANTARCTIQUE', 'AQ', 'ATA', '2023-09-24 17:23:31', '1', 'enable', '010', 'C0000000009', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000605', '3', 'ANTIGUA-ET-BARBUDA', 'AG', 'ATG', '2023-09-24 17:23:31', '1', 'enable', '028', 'C0000000010', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000606', '3', 'ARGENTINE', 'AR', 'ARG', '2023-09-24 17:23:31', '1', 'enable', '032', 'C0000000011', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000607', '3', 'ARMÉNIE', 'AM', 'ARM', '2023-09-24 17:23:31', '1', 'enable', '051', 'C0000000012', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000608', '3', 'ARUBA', 'AW', 'ABW', '2023-09-24 17:23:31', '1', 'enable', '533', 'C0000000013', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000609', '3', 'AUSTRALIE', 'AU', 'AUS', '2023-09-24 17:23:31', '1', 'enable', '036', 'C0000000014', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000610', '3', 'AUTRICHE', 'AT', 'AUT', '2023-09-24 17:23:31', '1', 'enable', '040', 'C0000000015', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000611', '3', 'AZERBAÏDJAN', 'AZ', 'AZE', '2023-09-24 17:23:31', '1', 'enable', '031', 'C0000000016', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000612', '3', 'BAHAMAS', 'BS', 'BHS', '2023-09-24 17:23:31', '1', 'enable', '044', 'C0000000017', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000613', '3', 'BAHREÏN', 'BH', 'BHR', '2023-09-24 17:23:31', '1', 'enable', '048', 'C0000000018', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000614', '3', 'BANGLADESH', 'BD', 'BGD', '2023-09-24 17:23:31', '1', 'enable', '050', 'C0000000019', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000615', '3', 'BARBADE', 'BB', 'BRB', '2023-09-24 17:23:31', '1', 'enable', '052', 'C0000000020', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000616', '3', 'BÉLARUS', 'BY', 'BLR', '2023-09-24 17:23:31', '1', 'enable', '112', 'C0000000021', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000617', '3', 'BELGIQUE', 'BE', 'BEL', '2023-09-24 17:23:31', '1', 'enable', '056', 'C0000000022', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000618', '3', 'BELIZE', 'BZ', 'BLZ', '2023-09-24 17:23:31', '1', 'enable', '084', 'C0000000023', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000619', '3', 'BÉNIN', 'BJ', 'BEN', '2023-09-24 17:23:31', '1', 'enable', '204', 'C0000000024', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000620', '3', 'BERMUDES', 'BM', 'BMU', '2023-09-24 17:23:31', '1', 'enable', '060', 'C0000000025', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000621', '3', 'BHOUTAN', 'BT', 'BTN', '2023-09-24 17:23:31', '1', 'enable', '064', 'C0000000026', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000622', '3', 'BOLIVIE', 'BO', 'BOL', '2023-09-24 17:23:31', '1', 'enable', '068', 'C0000000027', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000623', '3', 'BONAIRE, SAINT-EUSTACHE ET SABA', 'BQ', 'BES', '2023-09-24 17:23:31', '1', 'enable', '535', 'C0000000028', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000624', '3', 'BOSNIE-HERZÉGOVINE', 'BA', 'BIH', '2023-09-24 17:23:31', '1', 'enable', '070', 'C0000000029', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000625', '3', 'BOTSWANA', 'BW', 'BWA', '2023-09-24 17:23:31', '1', 'enable', '072', 'C0000000030', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000626', '3', 'BOUVET', 'BV', 'BVT', '2023-09-24 17:23:31', '1', 'enable', '074', 'C0000000031', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000627', '3', 'BRÉSIL', 'BR', 'BRA', '2023-09-24 17:23:31', '1', 'enable', '076', 'C0000000032', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000628', '3', 'INDIEN', 'IO', 'IOT', '2023-09-24 17:23:31', '1', 'enable', '086', 'C0000000033', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000629', '3', 'BRUNÉI DARUSSALAM', 'BN', 'BRN', '2023-09-24 17:23:31', '1', 'enable', '096', 'C0000000034', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000630', '3', 'BULGARIE', 'BG', 'BGR', '2023-09-24 17:23:31', '1', 'enable', '100', 'C0000000035', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000631', '3', 'BURKINA FASO', 'BF', 'BFA', '2023-09-24 17:23:31', '1', 'enable', '854', 'C0000000036', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000632', '3', 'BURUNDI', 'BI', 'BDI', '2023-09-24 17:23:31', '1', 'enable', '108', 'C0000000037', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000633', '3', 'CAP-VERT', 'CV', 'CPV', '2023-09-24 17:23:31', '1', 'enable', '132', 'C0000000038', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000634', '3', 'CAMBODGE', 'KH', 'KHM', '2023-09-24 17:23:31', '1', 'enable', '116', 'C0000000039', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000635', '3', 'CAMEROUN', 'CM', 'CMR', '2023-09-24 17:23:31', '1', 'enable', '120', 'C0000000040', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000636', '3', 'CANADA', 'CA', 'CAN', '2023-09-24 17:23:31', '1', 'enable', '124', 'C0000000041', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000637', '3', 'CAÏMANS', 'KY', 'CYM', '2023-09-24 17:23:31', '1', 'enable', '136', 'C0000000042', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000638', '3', 'RÉPUBLIQUE CENTRAFRICAINE', 'CF', 'CAF', '2023-09-24 17:23:31', '1', 'enable', '140', 'C0000000043', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000639', '3', 'TCHAD', 'TD', 'TCD', '2023-09-24 17:23:31', '1', 'enable', '148', 'C0000000044', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000640', '3', 'CHILI', 'CL', 'CHL', '2023-09-24 17:23:31', '1', 'enable', '152', 'C0000000045', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000641', '3', 'CHINE', 'CN', 'CHN', '2023-09-24 17:23:31', '1', 'enable', '156', 'C0000000046', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000642', '3', 'CHRISTMAS', 'CX', 'CXR', '2023-09-24 17:23:31', '1', 'enable', '162', 'C0000000047', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000643', '3', 'COCOS', 'CC', 'CCK', '2023-09-24 17:23:31', '1', 'enable', '166', 'C0000000048', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000644', '3', 'COLOMBIE', 'CO', 'COL', '2023-09-24 17:23:31', '1', 'enable', '170', 'C0000000049', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000645', '3', 'COMORES', 'KM', 'COM', '2023-09-24 17:23:31', '1', 'enable', '174', 'C0000000050', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000646', '3', 'CONGO', 'CD', 'COD', '2023-09-24 17:23:31', '1', 'enable', '180', 'C0000000051', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000647', '3', 'CONGO', 'CG', 'COG', '2023-09-24 17:23:31', '1', 'enable', '178', 'C0000000052', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000648', '3', 'COOK', 'CK', 'COK', '2023-09-24 17:23:31', '1', 'enable', '184', 'C0000000053', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000649', '3', 'COSTA RICA', 'CR', 'CRI', '2023-09-24 17:23:31', '1', 'enable', '188', 'C0000000054', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000650', '3', 'CÔTE D\'IVOIRE', 'CI', 'CIV', '2023-09-24 17:23:31', '1', 'enable', '+225', '1', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000651', '3', 'CROATIE', 'HR', 'HRV', '2023-09-24 17:23:31', '1', 'enable', '191', 'C0000000056', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000652', '3', 'CUBA', 'CU', 'CUB', '2023-09-24 17:23:31', '1', 'enable', '192', 'C0000000057', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000653', '3', 'CURAÇAO', 'CW', 'CUW', '2023-09-24 17:23:31', '1', 'enable', '531', 'C0000000058', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000654', '3', 'CHYPRE', 'CY', 'CYP', '2023-09-24 17:23:31', '1', 'enable', '196', 'C0000000059', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000655', '3', 'TCHÉQUIE', 'CZ', 'CZE', '2023-09-24 17:23:31', '1', 'enable', '203', 'C0000000060', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000656', '3', 'DANEMARK', 'DK', 'DNK', '2023-09-24 17:23:31', '1', 'enable', '208', 'C0000000061', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000657', '3', 'DJIBOUTI', 'DJ', 'DJI', '2023-09-24 17:23:31', '1', 'enable', '262', 'C0000000062', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000658', '3', 'DOMINIQUE', 'DM', 'DMA', '2023-09-24 17:23:31', '1', 'enable', '212', 'C0000000063', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000659', '3', 'DOMINICAINE', 'DO', 'DOM', '2023-09-24 17:23:31', '1', 'enable', '214', 'C0000000064', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000660', '3', 'ÉQUATEUR', 'EC', 'ECU', '2023-09-24 17:23:31', '1', 'enable', '218', 'C0000000065', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000661', '3', 'ÉGYPTE', 'EG', 'EGY', '2023-09-24 17:23:31', '1', 'enable', '818', 'C0000000066', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000662', '3', 'EL SALVADOR', 'SV', 'SLV', '2023-09-24 17:23:31', '1', 'enable', '222', 'C0000000067', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000663', '3', 'AFGHANISTAN', 'AF', 'AFG', '2023-09-24 17:23:31', '1', 'enable', '004', 'C0000000001', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000664', '3', 'ÅLAND', 'AX', 'ALA', '2023-09-24 17:23:31', '1', 'enable', '248', 'C0000000002', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000665', '3', 'ALBANIE', 'AL', 'ALB', '2023-09-24 17:23:31', '1', 'enable', '008', 'C0000000003', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000666', '3', 'GUINÉE ÉQUATORIALE', 'GQ', 'GNQ', '2023-09-24 17:23:31', '1', 'enable', '226', 'C0000000068', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000667', '3', 'ÉRYTHRÉE', 'ER', 'ERI', '2023-09-24 17:23:31', '1', 'enable', '232', 'C0000000069', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000668', '3', 'ESTONIE', 'EE', 'EST', '2023-09-24 17:23:31', '1', 'enable', '233', 'C0000000070', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000669', '3', 'ÉTHIOPIE', 'ET', 'ETH', '2023-09-24 17:23:31', '1', 'enable', '231', 'C0000000071', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000670', '3', 'FALKLAND', 'FK', 'FLK', '2023-09-24 17:23:31', '1', 'enable', '238', 'C0000000072', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000671', '3', 'FÉROÉ', 'FO', 'FRO', '2023-09-24 17:23:31', '1', 'enable', '234', 'C0000000073', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000672', '3', 'FIDJI', 'FJ', 'FJI', '2023-09-24 17:23:31', '1', 'enable', '242', 'C0000000074', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000673', '3', 'FINLANDE', 'FI', 'FIN', '2023-09-24 17:23:31', '1', 'enable', '246', 'C0000000075', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000674', '3', 'FRANCE', 'FR', 'FRA', '2023-09-24 17:23:31', '1', 'enable', '250', 'C0000000076', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000675', '3', 'GUYANE FRANÇAISE', 'GF', 'GUF', '2023-09-24 17:23:31', '1', 'enable', '254', 'C0000000077', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000676', '3', 'POLYNÉSIE FRANÇAISE', 'PF', 'PYF', '2023-09-24 17:23:31', '1', 'enable', '258', 'C0000000078', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000677', '3', 'TERRES AUSTRALES FRANÇAISES', 'TF', 'ATF', '2023-09-24 17:23:31', '1', 'enable', '260', 'C0000000079', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000678', '3', 'GABON', 'GA', 'GAB', '2023-09-24 17:23:31', '1', 'enable', '266', 'C0000000080', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000679', '3', 'GAMBIE', 'GM', 'GMB', '2023-09-24 17:23:31', '1', 'enable', '270', 'C0000000081', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000680', '3', 'GÉORGIE', 'GE', 'GEO', '2023-09-24 17:23:31', '1', 'enable', '268', 'C0000000082', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000681', '3', 'ALLEMAGNE', 'DE', 'DEU', '2023-09-24 17:23:31', '1', 'enable', '276', 'C0000000083', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000682', '3', 'GHANA', 'GH', 'GHA', '2023-09-24 17:23:31', '1', 'enable', '288', 'C0000000084', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000683', '3', 'GIBRALTAR', 'GI', 'GIB', '2023-09-24 17:23:31', '1', 'enable', '292', 'C0000000085', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000684', '3', 'GRÈCE', 'GR', 'GRC', '2023-09-24 17:23:31', '1', 'enable', '300', 'C0000000086', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000685', '3', 'GROENLAND', 'GL', 'GRL', '2023-09-24 17:23:31', '1', 'enable', '304', 'C0000000087', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000686', '3', 'GRENADE', 'GD', 'GRD', '2023-09-24 17:23:31', '1', 'enable', '308', 'C0000000088', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000687', '3', 'GUADELOUPE', 'GP', 'GLP', '2023-09-24 17:23:31', '1', 'enable', '312', 'C0000000089', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000688', '3', 'GUAM', 'GU', 'GUM', '2023-09-24 17:23:31', '1', 'enable', '316', 'C0000000090', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000689', '3', 'GUATEMALA', 'GT', 'GTM', '2023-09-24 17:23:31', '1', 'enable', '320', 'C0000000091', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000690', '3', 'GUERNESEY', 'GG', 'GGY', '2023-09-24 17:23:31', '1', 'enable', '831', 'C0000000092', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000691', '3', 'GUINÉE', 'GN', 'GIN', '2023-09-24 17:23:31', '1', 'enable', '324', 'C0000000093', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000692', '3', 'GUINÉE-BISSAU', 'GW', 'GNB', '2023-09-24 17:23:31', '1', 'enable', '624', 'C0000000094', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000693', '3', 'GUYANA', 'GY', 'GUY', '2023-09-24 17:23:31', '1', 'enable', '328', 'C0000000095', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000694', '3', 'HAÏTI', 'HT', 'HTI', '2023-09-24 17:23:31', '1', 'enable', '332', 'C0000000096', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000695', '3', 'HEARD-ET-ÎLES MACDONALD', 'HM', 'HMD', '2023-09-24 17:23:31', '1', 'enable', '334', 'C0000000097', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000696', '3', 'HONDURAS', 'HN', 'HND', '2023-09-24 17:23:31', '1', 'enable', '340', 'C0000000098', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000697', '3', 'HONG KONG', 'HK', 'HKG', '2023-09-24 17:23:31', '1', 'enable', '344', 'C0000000099', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000698', '3', 'HONGRIE', 'HU', 'HUN', '2023-09-24 17:23:31', '1', 'enable', '348', 'C0000000100', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000699', '3', 'ISLANDE', 'IS', 'ISL', '2023-09-24 17:23:31', '1', 'enable', '352', 'C0000000101', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000700', '3', 'INDE', 'IN', 'IND', '2023-09-24 17:23:31', '1', 'enable', '356', 'C0000000102', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000701', '3', 'INDONÉSIE', 'ID', 'IDN', '2023-09-24 17:23:31', '1', 'enable', '360', 'C0000000103', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000702', '3', 'IRAN', 'IR', 'IRN', '2023-09-24 17:23:31', '1', 'enable', '364', 'C0000000104', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000703', '3', 'IRAQ', 'IQ', 'IRQ', '2023-09-24 17:23:31', '1', 'enable', '368', 'C0000000105', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000704', '3', 'IRLANDE', 'IE', 'IRL', '2023-09-24 17:23:31', '1', 'enable', '372', 'C0000000106', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000705', '3', 'ÎLE DE MAN', 'IM', 'IMN', '2023-09-24 17:23:31', '1', 'enable', '833', 'C0000000107', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000706', '3', 'ISRAËL', 'IL', 'ISR', '2023-09-24 17:23:31', '1', 'enable', '376', 'C0000000108', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000707', '3', 'ITALIE', 'IT', 'ITA', '2023-09-24 17:23:31', '1', 'enable', '380', 'C0000000109', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000708', '3', 'JAMAÏQUE', 'JM', 'JAM', '2023-09-24 17:23:31', '1', 'enable', '388', 'C0000000110', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000709', '3', 'JAPON', 'JP', 'JPN', '2023-09-24 17:23:31', '1', 'enable', '392', 'C0000000111', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000710', '3', 'JERSEY', 'JE', 'JEY', '2023-09-24 17:23:31', '1', 'enable', '832', 'C0000000112', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000711', '3', 'JORDANIE', 'JO', 'JOR', '2023-09-24 17:23:31', '1', 'enable', '400', 'C0000000113', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000712', '3', 'KAZAKHSTAN', 'KZ', 'KAZ', '2023-09-24 17:23:31', '1', 'enable', '398', 'C0000000114', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000713', '3', 'KENYA', 'KE', 'KEN', '2023-09-24 17:23:31', '1', 'enable', '404', 'C0000000115', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000714', '3', 'KIRIBATI', 'KI', 'KIR', '2023-09-24 17:23:31', '1', 'enable', '296', 'C0000000116', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000715', '3', 'CORÉE', 'KP', 'PRK', '2023-09-24 17:23:31', '1', 'enable', '408', 'C0000000117', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000716', '3', 'CORÉE', 'KR', 'KOR', '2023-09-24 17:23:31', '1', 'enable', '410', 'C0000000118', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000717', '3', 'KOWEÏT', 'KW', 'KWT', '2023-09-24 17:23:31', '1', 'enable', '414', 'C0000000119', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000718', '3', 'KIRGHIZISTAN', 'KG', 'KGZ', '2023-09-24 17:23:31', '1', 'enable', '417', 'C0000000120', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000719', '3', 'LAO, RÉPUBLIQUE DÉMOCRATIQUE POPULAIRE', 'LA', 'LAO', '2023-09-24 17:23:31', '1', 'enable', '418', 'C0000000121', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000720', '3', 'LETTONIE', 'LV', 'LVA', '2023-09-24 17:23:31', '1', 'enable', '428', 'C0000000122', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000721', '3', 'LIBAN', 'LB', 'LBN', '2023-09-24 17:23:31', '1', 'enable', '422', 'C0000000123', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000722', '3', 'LESOTHO', 'LS', 'LSO', '2023-09-24 17:23:31', '1', 'enable', '426', 'C0000000124', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000723', '3', 'LIBÉRIA', 'LR', 'LBR', '2023-09-24 17:23:31', '1', 'enable', '430', 'C0000000125', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000724', '3', 'LIBYE', 'LY', 'LBY', '2023-09-24 17:23:31', '1', 'enable', '434', 'C0000000126', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000725', '3', 'LIECHTENSTEIN', 'LI', 'LIE', '2023-09-24 17:23:31', '1', 'enable', '438', 'C0000000127', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000726', '3', 'LITUANIE', 'LT', 'LTU', '2023-09-24 17:23:31', '1', 'enable', '440', 'C0000000128', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000727', '3', 'LUXEMBOURG', 'LU', 'LUX', '2023-09-24 17:23:31', '1', 'enable', '442', 'C0000000129', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000728', '3', 'MACAO', 'MO', 'MAC', '2023-09-24 17:23:31', '1', 'enable', '446', 'C0000000130', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000729', '3', 'MACÉDOINE', 'MK', 'MKD', '2023-09-24 17:23:31', '1', 'enable', '807', 'C0000000131', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000730', '3', 'MADAGASCAR', 'MG', 'MDG', '2023-09-24 17:23:31', '1', 'enable', '450', 'C0000000132', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000731', '3', 'MALAWI', 'MW', 'MWI', '2023-09-24 17:23:31', '1', 'enable', '454', 'C0000000133', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000732', '3', 'MALAISIE', 'MY', 'MYS', '2023-09-24 17:23:31', '1', 'enable', '458', 'C0000000134', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000733', '3', 'MALDIVES', 'MV', 'MDV', '2023-09-24 17:23:31', '1', 'enable', '462', 'C0000000135', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000734', '3', 'MALI', 'ML', 'MLI', '2023-09-24 17:23:31', '1', 'enable', '466', '1', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000735', '3', 'MALTE', 'MT', 'MLT', '2023-09-24 17:23:31', '1', 'enable', '470', 'C0000000137', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000736', '3', 'MARSHALL', 'MH', 'MHL', '2023-09-24 17:23:31', '1', 'enable', '584', 'C0000000138', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000737', '3', 'MARTINIQUE', 'MQ', 'MTQ', '2023-09-24 17:23:31', '1', 'enable', '474', 'C0000000139', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000738', '3', 'MAURITANIE', 'MR', 'MRT', '2023-09-24 17:23:31', '1', 'enable', '478', 'C0000000140', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000739', '3', 'MAURICE', 'MU', 'MUS', '2023-09-24 17:23:31', '1', 'enable', '480', 'C0000000141', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000740', '3', 'MAYOTTE', 'YT', 'MYT', '2023-09-24 17:23:31', '1', 'enable', '175', 'C0000000142', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000741', '3', 'MEXIQUE', 'MX', 'MEX', '2023-09-24 17:23:31', '1', 'enable', '484', 'C0000000143', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000742', '3', 'MICRONÉSIE', 'FM', 'FSM', '2023-09-24 17:23:31', '1', 'enable', '583', 'C0000000144', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000743', '3', 'MOLDOVA, RÉPUBLIQUE DE', 'MD', 'MDA', '2023-09-24 17:23:31', '1', 'enable', '498', 'C0000000145', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000744', '3', 'MONACO', 'MC', 'MCO', '2023-09-24 17:23:31', '1', 'enable', '492', 'C0000000146', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000745', '3', 'MONGOLIE', 'MN', 'MNG', '2023-09-24 17:23:31', '1', 'enable', '496', 'C0000000147', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000746', '3', 'MONTÉNÉGRO', 'ME', 'MNE', '2023-09-24 17:23:31', '1', 'enable', '499', 'C0000000148', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000747', '3', 'MONTSERRAT', 'MS', 'MSR', '2023-09-24 17:23:31', '1', 'enable', '500', 'C0000000149', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000748', '3', 'MAROC', 'MA', 'MAR', '2023-09-24 17:23:31', '1', 'enable', '504', 'C0000000150', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000749', '3', 'MOZAMBIQUE', 'MZ', 'MOZ', '2023-09-24 17:23:31', '1', 'enable', '508', 'C0000000151', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000750', '3', 'MYANMAR', 'MM', 'MMR', '2023-09-24 17:23:31', '1', 'enable', '104', 'C0000000152', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000751', '3', 'NAMIBIE', 'NA', 'NAM', '2023-09-24 17:23:31', '1', 'enable', '516', 'C0000000153', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000752', '3', 'NAURU', 'NR', 'NRU', '2023-09-24 17:23:31', '1', 'enable', '520', 'C0000000154', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000753', '3', 'NÉPAL', 'NP', 'NPL', '2023-09-24 17:23:31', '1', 'enable', '524', 'C0000000155', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000754', '3', 'PAYS-BAS', 'NL', 'NLD', '2023-09-24 17:23:31', '1', 'enable', '528', 'C0000000156', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000755', '3', 'NOUVELLE-CALÉDONIE', 'NC', 'NCL', '2023-09-24 17:23:31', '1', 'enable', '540', 'C0000000157', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000756', '3', 'NOUVELLE-ZÉLANDE', 'NZ', 'NZL', '2023-09-24 17:23:31', '1', 'enable', '554', 'C0000000158', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000757', '3', 'NICARAGUA', 'NI', 'NIC', '2023-09-24 17:23:31', '1', 'enable', '558', 'C0000000159', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000758', '3', 'NIGER', 'NE', 'NER', '2023-09-24 17:23:31', '1', 'enable', '562', 'C0000000160', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000759', '3', 'NIGÉRIA', 'NG', 'NGA', '2023-09-24 17:23:31', '1', 'enable', '566', 'C0000000161', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000760', '3', 'NIUE', 'NU', 'NIU', '2023-09-24 17:23:31', '1', 'enable', '570', 'C0000000162', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000761', '3', 'NORFOLK', 'NF', 'NFK', '2023-09-24 17:23:31', '1', 'enable', '574', 'C0000000163', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000762', '3', 'MARIANNES DU NORD', 'MP', 'MNP', '2023-09-24 17:23:31', '1', 'enable', '580', 'C0000000164', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000763', '3', 'NORVÈGE', 'NO', 'NOR', '2023-09-24 17:23:31', '1', 'enable', '578', 'C0000000165', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000764', '3', 'OMAN', 'OM', 'OMN', '2023-09-24 17:23:31', '1', 'enable', '512', 'C0000000166', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000765', '3', 'PAKISTAN', 'PK', 'PAK', '2023-09-24 17:23:31', '1', 'enable', '586', 'C0000000167', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000766', '3', 'PALAOS', 'PW', 'PLW', '2023-09-24 17:23:31', '1', 'enable', '585', 'C0000000168', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000767', '3', 'PALESTINE, ÉTAT DE', 'PS', 'PSE', '2023-09-24 17:23:31', '1', 'enable', '275', 'C0000000169', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000768', '3', 'PANAMA', 'PA', 'PAN', '2023-09-24 17:23:31', '1', 'enable', '591', 'C0000000170', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000769', '3', 'PAPOUASIE-NOUVELLE-GUINÉE', 'PG', 'PNG', '2023-09-24 17:23:31', '1', 'enable', '598', 'C0000000171', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000770', '3', 'PARAGUAY', 'PY', 'PRY', '2023-09-24 17:23:31', '1', 'enable', '600', 'C0000000172', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000771', '3', 'PÉROU', 'PE', 'PER', '2023-09-24 17:23:31', '1', 'enable', '604', 'C0000000173', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000772', '3', 'PHILIPPINES', 'PH', 'PHL', '2023-09-24 17:23:31', '1', 'enable', '608', 'C0000000174', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000773', '3', 'PITCAIRN', 'PN', 'PCN', '2023-09-24 17:23:31', '1', 'enable', '612', 'C0000000175', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000774', '3', 'POLOGNE', 'PL', 'POL', '2023-09-24 17:23:31', '1', 'enable', '616', 'C0000000176', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000775', '3', 'PORTUGAL', 'PT', 'PRT', '2023-09-24 17:23:31', '1', 'enable', '620', 'C0000000177', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000776', '3', 'PORTO RICO', 'PR', 'PRI', '2023-09-24 17:23:31', '1', 'enable', '630', 'C0000000178', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000777', '3', 'QATAR', 'QA', 'QAT', '2023-09-24 17:23:31', '1', 'enable', '634', 'C0000000179', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000778', '3', 'RÉUNION', 'RE', 'REU', '2023-09-24 17:23:31', '1', 'enable', '638', 'C0000000180', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000779', '3', 'ROUMANIE', 'RO', 'ROU', '2023-09-24 17:23:31', '1', 'enable', '642', 'C0000000181', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000078', '5', 'TENNIS', 'tenis', '0000000000000000000000000000000000000782', '2024-05-18 16:34:38', '1', 'enable', ' ', '3', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000780', '3', 'THAÏLANDE', 'TH', 'THA', '2023-09-24 17:23:31', '1', 'enable', '066', 'C0000000248', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000781', '4', 'CINEMA', 'cinema', ' ', '2024-05-18 16:34:38', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000782', '4', 'SPORT', 'sport', ' ', '2024-05-18 16:34:38', '1', 'enable', ' ', '2', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000783', '4', 'SPECTACLE', 'spectacle', ' ', '2024-05-18 16:34:38', '1', 'enable', ' ', '3', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000784', '5', 'ACTION', 'action', '0000000000000000000000000000000000000781', '2024-05-18 16:34:38', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000785', '5', 'ROMANTIQUE', 'romantique', '0000000000000000000000000000000000000781', '2024-05-18 16:34:38', '1', 'enable', ' ', '2', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000786', '5', 'FOOTBALL', 'football', '0000000000000000000000000000000000000782', '2024-05-18 16:34:38', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000787', '5', 'BASKETBALL', 'basketball', '0000000000000000000000000000000000000782', '2024-05-18 16:34:38', '1', 'enable', ' ', '2', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000079', '5', 'Théâtre', 'theatre', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000796', '5', 'VVIP', 'vvip', ' ', '2024-05-18 16:34:38', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000797', '5', 'VIP', 'vip', ' ', '2024-05-18 16:34:38', '1', 'enable', ' ', '2', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000798', '5', 'GRANDPUBLIC', 'grandpublic', ' ', '2024-05-18 16:34:38', '1', 'enable', ' ', '3', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000080', '5', 'Comédie musicale', 'comediemusicale', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '2', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000800', '6', 'VVIP', 'vvip', '1', '2024-05-18 16:34:38', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000801', '6', 'VIP', 'vip', '1', '2024-05-18 16:34:38', '1', 'enable', ' ', '2', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000802', '6', 'GRANDPUBLIC', 'grandpublic', '1', '2024-05-18 16:34:38', '1', 'enable', ' ', '3', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000803', '7', 'Place de la culture', 'Place de la culture', ' ', '2024-05-18 16:34:38', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000804', '7', 'Centre culturel', 'Centre culturel', ' ', '2024-05-18 16:34:38', '1', 'enable', ' ', '2', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000805', '7', 'Stade de Conakry', 'Stade de Conakry', ' ', '2024-05-18 16:34:38', '1', 'enable', ' ', '3', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000081', '5', 'Concert', 'concert', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '3', NULL, NULL, ' ', ' '),
('0000000000000000000000000000000000000810', '6', 'GRATUIT', 'gratuit', '0', '2024-05-18 16:34:38', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000082', '5', 'Opéra', 'opera', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '4', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000083', '5', 'Ballet', 'ballet', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '5', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000084', '5', 'Danse contemporaine', 'dansecontemporaine', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '6', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000085', '5', 'Cirque', 'cirque', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '7', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000086', '5', 'Stand-up comedy', 'standupcomedy', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '8', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000087', '5', 'Magie', 'magie', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '9', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000088', '5', 'Marionnettes', 'marionnettes', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '10', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000089', '5', 'Cabaret', 'cabaret', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '11', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000090', '5', 'Spectacle de rue', 'spectaclederue', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '12', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000091', '5', 'Revue', 'revue', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '13', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000092', '5', 'Mime', 'mime', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '14', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000093', '5', 'Improvisation théâtrale', 'improvisationtheatrale', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '15', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000094', '5', 'Spectacles pour enfants', 'spectaclespourenfants', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '16', NULL, NULL, ' ', ' '),
('000000000000000000000000000000000000095', '5', 'Performances multimédias', 'performancesmultimedias', '0000000000000000000000000000000000000783', '2024-05-18 16:34:38', '1', 'enable', ' ', '17', NULL, NULL, ' ', ' '),
('INFO_SENDERSMS', '2', 'Information sur le SENDER de SMS de l\'application', 'C-WASHER', ' ', '2023-09-04 22:41:04', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('MSG_SAVE_CAR', '1', 'Enregistrement de véhicule', 'Véhicule [P1] enregistrement effectué avec succès', ' ', '2023-08-29 00:00:00', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('MSG_VALIDATE_CASH', '1', 'Validation de paiement', 'Cher client, telecharge ton ticket ici: [P1].', ' ', '2023-08-29 00:00:00', '1', 'enable', ' ', '1', NULL, NULL, ' ', ' '),
('MSG_WASHING_END', '1', 'Message de notification client - Lavage terminé', 'Cher(e) client(e). Le lavage de votre véhicule est terminé. Prière le récupérer dans les meilleurs délai. [P1]', ' ', '2023-09-03 00:00:00', '1', 'enable', ' ', '2', NULL, NULL, ' ', ' '),
('URL_BACKOFFICE', '2', 'URL du backoffice', 'http://localhost/eticketAdmin', ' ', '2023-09-04 22:41:04', '1', 'enable', ' ', '2', NULL, NULL, ' ', ' '),
('URL_FRONTOFFICE', '2', 'URL du frontoffice', 'http://localhost/guineeeticket', ' ', '2023-09-04 22:41:04', '1', 'enable', ' ', '3', NULL, NULL, ' ', ' ');

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `lg_notid` varchar(40) NOT NULL,
  `str_notcontenu` varchar(200) DEFAULT NULL,
  `str_notcontact` varchar(300) DEFAULT NULL,
  `dt_notcreated` datetime DEFAULT NULL,
  `dt_notupdated` datetime DEFAULT NULL,
  `lg_uticreatedid` varchar(40) NOT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_notstatut` varchar(20) DEFAULT NULL,
  `p_key` varchar(40) DEFAULT NULL,
  `str_notstatutconsultation` varchar(20) DEFAULT NULL,
  `str_notflag` varchar(2) DEFAULT NULL,
  `str_nottitle` varchar(250) DEFAULT NULL,
  `str_nottype` varchar(20) NOT NULL,
  `str_notcanal` varchar(20) DEFAULT NULL,
  `int_notcanal` varchar(20) DEFAULT NULL,
  `str_notorigineid` varchar(40) DEFAULT NULL,
  `str_nottask` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `operateur`
--

CREATE TABLE `operateur` (
  `lg_opeid` varchar(40) NOT NULL,
  `str_opename` varchar(50) DEFAULT NULL,
  `str_opedescription` varchar(150) DEFAULT NULL,
  `dt_opeupdated` timestamp NULL DEFAULT NULL,
  `dt_opecreated` timestamp NULL DEFAULT NULL,
  `str_opestatut` varchar(20) DEFAULT 'enable',
  `lg_uticreatedid` varchar(40) DEFAULT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_opepic` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `operateur`
--

INSERT INTO `operateur` (`lg_opeid`, `str_opename`, `str_opedescription`, `dt_opeupdated`, `dt_opecreated`, `str_opestatut`, `lg_uticreatedid`, `lg_utiupdatedid`, `str_opepic`) VALUES
('1', 'flooz', 'moov money', '2020-11-04 08:00:00', NULL, 'enable', '1', NULL, 'pic10.jpg'),
('2', 'mtn money', 'mtn money', '2020-11-04 08:00:00', NULL, 'enable', '1', NULL, 'pic8.jpg'),
('3', 'orange money', 'orange money', '2020-11-04 08:00:00', NULL, 'enable', '1', NULL, 'pic9.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `privilege`
--

CREATE TABLE `privilege` (
  `lg_priid` varchar(40) NOT NULL,
  `str_priname` varchar(50) DEFAULT NULL,
  `str_pridescription` varchar(300) DEFAULT NULL,
  `dt_pricreated` timestamp NULL DEFAULT NULL,
  `dt_priupdated` timestamp NULL DEFAULT NULL,
  `lg_uticreatedid` varchar(40) DEFAULT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_pritype` varchar(20) DEFAULT NULL,
  `str_pristatut` varchar(20) DEFAULT 'enable',
  `str_priurl` varchar(100) DEFAULT NULL,
  `str_prikind` varchar(5) DEFAULT NULL,
  `str_priclass` varchar(100) DEFAULT NULL,
  `lg_priparentid` varchar(40) DEFAULT NULL,
  `lg_prigroupid` varchar(40) DEFAULT NULL,
  `int_pripriority` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `privilege`
--

INSERT INTO `privilege` (`lg_priid`, `str_priname`, `str_pridescription`, `dt_pricreated`, `dt_priupdated`, `lg_uticreatedid`, `lg_utiupdatedid`, `str_pritype`, `str_pristatut`, `str_priurl`, `str_prikind`, `str_priclass`, `lg_priparentid`, `lg_prigroupid`, `int_pripriority`) VALUES
('1', 'Tableau bord', 'Tableau bord', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'tableau-bord', '1', 'faTachometerAlt', NULL, '14', 1),
('10', 'Liste des bannières', 'Bannières - Liste des bannières', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'liste-event-banniere', '2', 'faFileAlt', '6', '14', 4),
('11', 'Reporting', 'Reporting', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', NULL, '1', 'faUser', NULL, '14', 5),
('12', 'Suivi clients', 'Reporting - Suivi clients', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', '/liste-client/', '2', 'faList', '11', '14', 1),
('13', 'Historique Tickets', 'Reporting - Historique Tickets', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', '/liste-ticket/', '2', 'faList', '11', '14', 5),
('14', 'Traitements Journaliers', 'Traitements Journaliers', '2024-09-05 11:14:27', NULL, NULL, NULL, 'CUSTOMER', 'enable', NULL, '0', NULL, NULL, NULL, 1),
('15', 'Utilisateurs', 'Utilisateurs', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', NULL, '1', 'faUser', NULL, '14', 4),
('16', 'Créer un utilisateur', 'Utilisateurs - Créer un utilisateur', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'save-utilisateurs', '2', 'faList', '15', '14', 1),
('17', 'Liste des utilisateurs', 'Utilisateurs - Liste des utilisateurs', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'liste-utilisateurs', '2', 'faList', '15', '14', 2),
('2', 'Evènements', 'Evènements', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', NULL, '1', 'faCalendarAlt', NULL, '14', 2),
('20', 'Autorisation de modification de mot de passe', 'Autorisation de modification de mot de passe', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', NULL, '3', NULL, NULL, NULL, 0),
('21', 'Configuration Banque', 'Configuration - Configuration Banque', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'delete', 'saveSociete.html', '2', 'icon fa-sitemap', '15', '14', 3),
('22', 'Déclarations Incidents/Effets', 'Gestion des déclarations CIP - Liste déclarations d\'incidents', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'delete', 'listDeclarationincident.html', '2', 'icon fa-file-text', '11', '14', 2),
('23', 'Déclarations Oppositions', 'Gestion des déclarations CIP - Liste déclarations d\'oppositions', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'delete', 'listDeclarationopposition.html', '2', 'icon fa-file-text', '11', '14', 3),
('24', 'Déclarations Contrats', 'Gestion des déclarations CDR/BIC - Liste déclarations des Contrats', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationcontrat.html', '2', 'icon fa-file-text', '25', '14', 1),
('25', 'Gestion déclarations CDR', 'Gestion des déclarations de la Centrale des Risques / BIC', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'delete', NULL, '1', 'demande.svg', NULL, '14', 6),
('26', 'Déclarations BIC', 'Gestion des déclarations CDR/BIC - Liste déclarations des Contrats BIC', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationbic.html', '2', 'icon fa-file-text', '25', '14', 2),
('27', 'Gestion déclarations BPR', 'Gestion des déclarations des Balances de paiements', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'delete', NULL, '1', 'canal-reception.svg', NULL, '14', 7),
('28', 'Déclarations CRP', 'Gestion déclarations BPR - Liste déclarations de CRP', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationcrp.html', '2', 'icon fa-file-text', '27', '14', 1),
('29', 'Déclarations BP1', 'Gestion déclarations BPR - Liste déclarations de BP1', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationbpone.html', '2', 'icon fa-file-text', '27', '14', 2),
('3', 'Liste des evenements', 'Evènements - Liste des evenements', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'liste-event-data', '2', 'faList', '2', '14', 1),
('30', 'Déclarations BP2', 'Gestion déclarations BPR - Liste déclarations de BP2', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationbptwo.html', '2', 'icon fa-file-text', '27', '14', 3),
('31', 'Déclarations BP3', 'Gestion déclarations BPR - Liste déclarations de BP3', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationbpthree.html', '2', 'icon fa-file-text', '27', '14', 4),
('32', 'Déclarations BP4', 'Gestion déclarations BPR - Liste déclarations de BP4', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationbpfour.html', '2', 'icon fa-file-text', '27', '14', 5),
('33', 'Déclarations ATR', 'Gestion déclarations BPR - Liste déclarations de ATR', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationatr.html', '2', 'icon fa-file-text', '27', '14', 6),
('34', 'Déclarations Cartes bancaires', 'Gestion des déclarations CIP - Liste déclarations de cartes bancaires', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'delete', 'listDeclarationcartebancaire.html', '2', 'icon fa-file-text', '11', '14', 4),
('35', 'Paramétrage', 'Paramétrage', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', NULL, '1', 'parametrage.svg', NULL, '14', 9),
('37', 'Phase notification', 'Paramétrage - Liste des phases de notification', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listListe.html?t=ETAPE&n=Phase notification', '2', 'icon fa-sitemap', '35', '14', 1),
('38', 'Alertes', 'Paramétrage - Liste des alertes', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listAlerte.html?n=Alertes', '2', 'icon fa-sitemap', '35', '14', 2),
('39', 'Gestion déclarations EFC', 'Gestion des déclarations des Etats financiers consolidés', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'delete', NULL, '1', 'consersion-pre-recla.svg', NULL, '14', 8),
('4', 'Creation d\'évenement', 'Evènements - Creation d\'évenement', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'save-event-data', '2', 'faCalendarAlt', '2', '14', 2),
('40', 'Déclaration Bilan actif', 'Gestion déclarations EFC - Liste déclarations de déclaration de Bilan actif', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationbilanactif.html', '2', 'icon fa-file-text', '39', '14', 1),
('41', 'Déclaration Bilan passif', 'Gestion déclarations EFC - Liste déclarations de déclaration de Bilan passif', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationbilanpassif.html', '2', 'icon fa-file-text', '39', '14', 2),
('42', 'Déclaration Hors bilan', 'Gestion déclarations EFC - Liste déclarations de déclaration du Hors bilan', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationhorsbilan.html', '2', 'icon fa-file-text', '39', '14', 3),
('43', 'Déclaration Compte résultats', 'Gestion déclarations EFC - Liste de déclaration de Compte de résultats', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationcompteresultat.html', '2', 'icon fa-file-text', '39', '14', 4),
('44', 'Déclaration Annexe', 'Gestion déclarations EFC - Liste de déclaration des Annexes', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationannexe.html', '2', 'icon fa-file-text', '39', '14', 5),
('45', 'Déclaration EFC', 'Gestion déclarations EFC - Liste de déclaration des etats financier consolides', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'listDeclarationefc.html', '2', 'icon fa-file-text', '39', '14', 6),
('5', 'Liste personnes morales', 'Gestion des comptes - Liste personnes morales', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'delete', 'listClientMoral.html', '2', 'icon fa-university', '2', '14', 3),
('6', 'Bannières', 'Bannières', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', NULL, '1', 'faFileAlt', NULL, '14', 3),
('60', 'Profils', 'Profils', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', NULL, '1', 'faUsers', NULL, '14', 5),
('61', 'Créer un profil', 'Profils - Créer un profil', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'save-profiles', '2', 'faList', '60', '14', 1),
('62', 'Liste des profils', 'Profils - Liste des profils', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'liste-profiles', '2', 'faList', '60', '14', 2),
('7', 'Creation de bannières', 'Bannières - Creation de bannières', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'enable', 'save-event-banner', '2', 'faFileAlt', '6', '14', 1),
('8', 'Oppositions', 'Gestion des incidents - Liste oppositions', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'delete', 'listOpposition.html', '2', 'icon fa-sliders', '6', '14', 2),
('9', 'Cartes bancaires', 'Gestion des incidents - Liste cartes bancaires', '2024-09-05 11:14:28', NULL, NULL, NULL, 'CUSTOMER', 'delete', 'listCartebancaire.html', '2', 'icon fa-credit-card-alt', '6', '14', 3);

-- --------------------------------------------------------

--
-- Structure de la table `profile`
--

CREATE TABLE `profile` (
  `lg_proid` varchar(40) NOT NULL,
  `str_proname` varchar(70) DEFAULT NULL,
  `str_prodescription` varchar(100) DEFAULT NULL,
  `lg_priid` varchar(40) NOT NULL,
  `dt_procreated` timestamp NULL DEFAULT NULL,
  `dt_proupdated` timestamp NULL DEFAULT NULL,
  `lg_uticreatedid` varchar(40) DEFAULT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_protype` varchar(20) DEFAULT NULL,
  `str_prostatut` varchar(20) DEFAULT 'enable'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `profile`
--

INSERT INTO `profile` (`lg_proid`, `str_proname`, `str_prodescription`, `lg_priid`, `dt_procreated`, `dt_proupdated`, `lg_uticreatedid`, `lg_utiupdatedid`, `str_protype`, `str_prostatut`) VALUES
('1', 'super-admin', 'super administrateur', '1', '2020-11-04 08:00:00', NULL, '1', NULL, 'system', 'enable'),
('2', 'administrateur', 'Administrateur', '1', '2020-11-04 08:00:00', NULL, '1', NULL, 'customer', 'enable');

-- --------------------------------------------------------

--
-- Structure de la table `profile_privilege`
--

CREATE TABLE `profile_privilege` (
  `lg_pprid` varchar(40) NOT NULL,
  `lg_proid` varchar(40) NOT NULL,
  `lg_priid` varchar(40) NOT NULL,
  `dt_pprcreated` timestamp NULL DEFAULT NULL,
  `dt_pprupdated` timestamp NULL DEFAULT NULL,
  `lg_uticreatedid` varchar(40) NOT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_pprstatut` varchar(20) DEFAULT 'enable'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `profile_privilege`
--

INSERT INTO `profile_privilege` (`lg_pprid`, `lg_proid`, `lg_priid`, `dt_pprcreated`, `dt_pprupdated`, `lg_uticreatedid`, `lg_utiupdatedid`, `str_pprstatut`) VALUES
('13123014512323490566', '1', '20', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512323490567', '1', '4', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512323490568', '2', '4', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512323922568', '1', '33', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512324351906', '1', '29', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512324813098', '1', '30', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512325364798', '1', '31', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512326442591', '1', '32', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512326958529', '1', '28', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512327341543', '1', '43', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512327821154', '1', '44', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512328481985', '1', '40', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512328965685', '1', '41', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512329350473', '1', '42', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512329883995', '1', '2', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512330288447', '1', '3', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512330717054', '1', '24', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512331149362', '1', '26', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512331665972', '1', '11', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512332048230', '1', '34', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512332390778', '1', '12', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512332642859', '1', '22', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512332996076', '1', '23', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512333240793', '1', '13', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512333698745', '1', '25', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512334062497', '1', '27', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512334518619', '1', '39', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512335024889', '1', '6', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512335589154', '1', '9', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512335925574', '1', '10', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512336360584', '1', '7', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512336690634', '1', '8', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512337020568', '1', '15', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512337426036', '1', '17', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512337989453', '1', '16', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512338375135', '1', '35', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512338756191', '1', '38', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512339131721', '1', '37', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512339688175', '1', '1', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512339933685', '1', '14', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable'),
('13123014512340278989', '1', '45', '2024-09-05 15:54:35', NULL, '1', NULL, 'enable');

-- --------------------------------------------------------

--
-- Structure de la table `report`
--

CREATE TABLE `report` (
  `lg_repid` varchar(40) NOT NULL,
  `str_repname` varchar(40) DEFAULT NULL,
  `str_repdescription` varchar(150) DEFAULT NULL,
  `str_repsourcepath` varchar(150) DEFAULT NULL,
  `str_repexportpath` varchar(150) DEFAULT NULL,
  `str_repredirecturl` varchar(150) DEFAULT NULL,
  `dt_repcreated` datetime DEFAULT NULL,
  `dt_repupdated` datetime DEFAULT NULL,
  `str_repstatut` varchar(20) DEFAULT NULL,
  `str_repparameter` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `snapshotcaday`
--

CREATE TABLE `snapshotcaday` (
  `lg_scaid` varchar(40) NOT NULL,
  `lg_socid` varchar(40) NOT NULL,
  `dt_scaday` date NOT NULL,
  `dt_sopupdated` timestamp NULL DEFAULT NULL,
  `dt_sopcreated` timestamp NULL DEFAULT NULL,
  `str_sopstatut` varchar(20) DEFAULT 'enable',
  `dbl_scaamount` double DEFAULT NULL,
  `int_scanumber` int(11) DEFAULT NULL,
  `lg_opeid` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `snapshotcaday`
--

INSERT INTO `snapshotcaday` (`lg_scaid`, `lg_socid`, `dt_scaday`, `dt_sopupdated`, `dt_sopcreated`, `str_sopstatut`, `dbl_scaamount`, `int_scanumber`, `lg_opeid`) VALUES
('1115112020', '1', '2020-11-15', '2020-11-15 17:39:08', '2020-11-15 11:41:27', 'enable', 150000, 1, '1'),
('1215112020', '1', '2020-11-15', '2020-11-15 17:39:08', '2020-11-15 11:41:27', 'enable', 42500, 3, '2');

-- --------------------------------------------------------

--
-- Structure de la table `societe`
--

CREATE TABLE `societe` (
  `lg_socid` varchar(40) NOT NULL,
  `str_socname` varchar(70) DEFAULT NULL,
  `str_socdescription` varchar(150) DEFAULT NULL,
  `str_soclogo` varchar(150) DEFAULT NULL,
  `dt_soccreated` timestamp NULL DEFAULT NULL,
  `dt_socupdated` timestamp NULL DEFAULT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_socstatut` varchar(20) DEFAULT NULL,
  `str_soccode` varchar(50) DEFAULT NULL,
  `str_socaddress` varchar(500) DEFAULT NULL,
  `str_socmail` varchar(150) DEFAULT NULL,
  `str_socphone` varchar(50) DEFAULT NULL,
  `str_socflag` varchar(25) DEFAULT NULL,
  `bool_socnotification` tinyint(4) DEFAULT NULL COMMENT 'permet de savoir si le client doit être notifié par sms',
  `dt_soclastabonnement` date DEFAULT NULL,
  `lg_uticreatedid` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `societe`
--

INSERT INTO `societe` (`lg_socid`, `str_socname`, `str_socdescription`, `str_soclogo`, `dt_soccreated`, `dt_socupdated`, `lg_utiupdatedid`, `str_socstatut`, `str_soccode`, `str_socaddress`, `str_socmail`, `str_socphone`, `str_socflag`, `bool_socnotification`, `dt_soclastabonnement`, `lg_uticreatedid`) VALUES
('1', 'nkm-tech', 'nkm-technology', 'logo_nkm.png', '2020-11-04 08:00:00', NULL, '', 'enable', '39dfa55283318d31afe5a3ff4a0e3253e2045e43', '7ème tranche vallée ', 'infos@nkm-technology.ci', '22541513892', 'french.png', 1, NULL, '1'),
('rqxug3zf2xiudjniowkb', 'marange boutik', 'marange boutik', '1604711014-1966311_10203365619770724_461778970_o.jpg', '2020-11-07 08:41:16', '2020-11-08 11:35:16', NULL, 'enable', 'eca387fb-fd0d-4a2c-82c7-9475827d0ee9', 'angré, 8ème tranche', 'marange.boutik@gmail.com', '22542708569', NULL, 1, NULL, '1'),
('yijcczvm4wklq5w3y8bp', 'synapse group', 'synapse group', '1604838388-images.jpeg', '2020-11-08 20:26:28', NULL, NULL, 'enable', 'ac08aa7dd14b3d7f952cbc886fda08268c1b0ed4', 'angré, carrefour batm', 'marange.boutik@gmail.com', '22509133209', NULL, 1, NULL, '1');

-- --------------------------------------------------------

--
-- Structure de la table `ticket`
--

CREATE TABLE `ticket` (
  `lg_ticid` varchar(40) NOT NULL,
  `lg_eveid` varchar(40) NOT NULL,
  `lg_lstid` varchar(40) NOT NULL COMMENT 'type de place',
  `lg_cliid` varchar(40) DEFAULT NULL,
  `str_ticname` varchar(50) NOT NULL,
  `str_ticphone` varchar(20) DEFAULT NULL COMMENT 'numéro de téléphone du client',
  `str_ticmail` varchar(200) DEFAULT NULL COMMENT 'mail du client',
  `str_ticbarecode` varchar(200) NOT NULL,
  `dt_ticvalidated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `dt_ticupdated` timestamp NULL DEFAULT NULL,
  `dt_ticcreated` timestamp NULL DEFAULT NULL,
  `str_ticstatut` varchar(20) DEFAULT 'enable',
  `dbl_ticamount` int(100) NOT NULL DEFAULT '0' COMMENT 'montant de la ticket',
  `str_ticuuid` varchar(60) DEFAULT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `lg_utivalidatedid` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `ticket`
--

INSERT INTO `ticket` (`lg_ticid`, `lg_eveid`, `lg_lstid`, `lg_cliid`, `str_ticname`, `str_ticphone`, `str_ticmail`, `str_ticbarecode`, `dt_ticvalidated`, `dt_ticupdated`, `dt_ticcreated`, `str_ticstatut`, `dbl_ticamount`, `str_ticuuid`, `lg_utiupdatedid`, `lg_utivalidatedid`) VALUES
('22aJl2gdWo6MoY0ZVgdh', 'iTMhYzQgbbNcUTKE6irHaBuHKqCy0NOIdHCx880W', '0000000000000000000000000000000000000802', 'swDYnyYdqAqNVn6S0oJd', 'FYz1G', '224622888069', '', '22aJl2gdWo6MoY0ZVgdh.png', '2024-10-06 21:01:40', '2024-10-07 04:01:40', '2024-09-21 04:02:27', 'process', 200000, '60ecb9c4-c3c1-4fa5-8095-5dfb89acd014', NULL, ' '),
('oXWc50lY02VT2Rth785N', 'iTMhYzQgbbNcUTKE6irHaBuHKqCy0NOIdHCx880W', '0000000000000000000000000000000000000802', 'swDYnyYdqAqNVn6S0oJd', 'R5qGf', '224622888069', '', 'oXWc50lY02VT2Rth785N.png', '2024-10-06 21:01:40', '2024-10-07 04:01:40', '2024-09-21 04:02:27', 'process', 200000, '60ecb9c4-c3c1-4fa5-8095-5dfb89acd014', NULL, ' '),
('UpjuTtZ2vdpGTPTEUpKF', 'iTMhYzQgbbNcUTKE6irHaBuHKqCy0NOIdHCx880W', '0000000000000000000000000000000000000801', 'swDYnyYdqAqNVn6S0oJd', 'hl5mM', '224622888069', '', 'UpjuTtZ2vdpGTPTEUpKF.png', '2024-10-06 21:01:40', '2024-10-07 04:01:40', '2024-09-21 04:02:27', 'process', 500000, '60ecb9c4-c3c1-4fa5-8095-5dfb89acd014', NULL, ' ');

-- --------------------------------------------------------

--
-- Structure de la table `transaction`
--

CREATE TABLE `transaction` (
  `lg_traid` varchar(40) NOT NULL,
  `lg_opeid` varchar(40) NOT NULL,
  `lg_ttrid` varchar(40) NOT NULL,
  `str_trareference` varchar(50) NOT NULL,
  `str_traphone` varchar(20) NOT NULL COMMENT 'numéro de téléphone du client',
  `str_opephone` varchar(20) NOT NULL,
  `dt_traupdated` timestamp NULL DEFAULT NULL,
  `dt_tracreated` timestamp NULL DEFAULT NULL,
  `str_trastatut` varchar(20) DEFAULT 'enable',
  `lg_sutid` varchar(40) NOT NULL,
  `dbl_traamount` double NOT NULL COMMENT 'montant de la transaction',
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_traothervalue` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `transaction`
--

INSERT INTO `transaction` (`lg_traid`, `lg_opeid`, `lg_ttrid`, `str_trareference`, `str_traphone`, `str_opephone`, `dt_traupdated`, `dt_tracreated`, `str_trastatut`, `lg_sutid`, `dbl_traamount`, `lg_utiupdatedid`, `str_traothervalue`) VALUES
('5ckbcfd06w5xmpnp8hc3', '1', '1', '098765432312', '40901405', '22509133208', NULL, '2020-11-14 09:26:44', 'enable', '1', 14000, NULL, ''),
('6ea67defltvfqrsw4nyn', '2', '1', '123456789', '09030123', '22540508004', NULL, '2020-11-11 11:12:02', 'enable', '1', 123500, NULL, NULL),
('a936fqofuwvayokuhexq', '2', '1', '989890121', '45099303', '22540508004', NULL, '2020-11-15 11:23:46', 'enable', '1', 10000, NULL, ''),
('dmni0ket94w5giduyoo0', '2', '2', '098765432', '40909200', '22540508004', NULL, '2020-11-13 11:34:28', 'enable', '1', 55600, NULL, NULL),
('gwm74qizqeqzb8zywtxw', '2', '1', '98989012', '45099303', '22540508004', NULL, '2020-11-14 18:38:51', 'enable', '1', 234000, NULL, ''),
('gxmn5buqmgb0ivkzu2ry', '2', '1', '989890121', '46029094', '22540508004', NULL, '2020-11-15 11:24:19', 'enable', '1', 12500, NULL, ''),
('hpg0uuausma62t4cknto', '1', '1', '09876543231', '40901405', '22509133208', NULL, '2020-11-13 11:37:47', 'enable', '1', 14000, NULL, NULL),
('jgnwsoxk9kgo6pdtgvcp', '2', '1', '098765432392', '45901409', '22540508004', NULL, '2020-11-15 17:38:40', 'enable', '1', 20000, NULL, ''),
('jsozeqphplskfsy6a9ie', '2', '1', '989890', '55189303', '22540508004', NULL, '2020-11-14 18:17:25', 'enable', '1', 12300, NULL, ''),
('lu4qp6o3svqqjbi5qylj', '1', '2', '989890121', '01930244', '22509133208', NULL, '2020-11-15 11:24:49', 'enable', '1', 150000, NULL, ''),
('sbsk5qst7qbhs6yopfyy', '3', '2', '098765432', '40909200', '22540508005', NULL, '2020-11-11 11:01:56', 'enable', '1', 10200, NULL, NULL),
('tlnvap0k4tbtgm5w6lyp', '2', '2', '0987654323', '42303213', '22540508004', NULL, '2020-11-13 11:35:17', 'enable', '1', 30000, NULL, NULL),
('uky6nuwikl8hbdlha7xs', '3', '1', '098765432', '42708569', '22540508005', '2020-11-10 00:23:30', '2020-11-09 22:14:28', 'enable', '1', 109300, '1', NULL),
('wcv5nd77eapj7lj1xxjq', '1', '1', '098765432312', '40901405', '22509133208', NULL, '2020-11-14 18:15:00', 'enable', '1', 250000, NULL, '');

-- --------------------------------------------------------

--
-- Structure de la table `typeliste`
--

CREATE TABLE `typeliste` (
  `lg_tylid` varchar(40) NOT NULL,
  `str_tylname` varchar(100) DEFAULT NULL,
  `str_tyldescription` varchar(150) DEFAULT NULL,
  `dt_tylcreated` datetime DEFAULT NULL,
  `dt_tylupdated` datetime DEFAULT NULL,
  `lg_uticreatedid` varchar(40) NOT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_tylstatut` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `typeliste`
--

INSERT INTO `typeliste` (`lg_tylid`, `str_tylname`, `str_tyldescription`, `dt_tylcreated`, `dt_tylupdated`, `lg_uticreatedid`, `lg_utiupdatedid`, `str_tylstatut`) VALUES
('1', 'NOTIFICATION', 'Liste des notifications de base de l\'application', '2023-08-29 00:00:00', NULL, '1', NULL, 'enable'),
('2', 'PARAMETRE', 'Liste des paramètres de base de l\'application', '2023-09-04 00:00:00', NULL, '1', NULL, 'enable'),
('3', 'PAYS', 'Liste des pays', '2023-09-04 00:00:00', NULL, '1', NULL, 'enable'),
('4', 'ACTIVITE', 'Liste des activites', '2024-05-18 16:29:35', NULL, '1', NULL, 'enable'),
('5', 'CATEGORIE', 'Liste des categories d\'activites', '2024-05-18 16:39:36', NULL, '1', NULL, 'enable'),
('6', 'TYPEPLACE', 'Liste des types de place', '2024-06-05 18:26:38', NULL, '1', NULL, 'enable'),
('7', 'EVENTPLACE', 'Listte des lieux des evenements', '2024-06-22 19:45:36', NULL, '1', NULL, 'enable');

-- --------------------------------------------------------

--
-- Structure de la table `typetransaction`
--

CREATE TABLE `typetransaction` (
  `lg_ttrid` varchar(40) NOT NULL,
  `str_ttrname` varchar(50) DEFAULT NULL,
  `str_ttrdescription` varchar(150) DEFAULT NULL,
  `dt_ttrupdated` timestamp NULL DEFAULT NULL,
  `dt_ttrcreated` timestamp NULL DEFAULT NULL,
  `str_ttrstatut` varchar(20) DEFAULT 'enable'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `typetransaction`
--

INSERT INTO `typetransaction` (`lg_ttrid`, `str_ttrname`, `str_ttrdescription`, `dt_ttrupdated`, `dt_ttrcreated`, `str_ttrstatut`) VALUES
('1', 'depot', 'dépôt', '2020-10-31 23:55:20', NULL, 'enable'),
('2', 'retrait', 'retrait', '2020-10-31 23:55:40', NULL, 'enable'),
('3', 'envoi', 'envoi', '2020-10-31 23:55:56', NULL, 'enable');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `lg_utiid` varchar(40) NOT NULL,
  `str_utifirstlastname` varchar(150) DEFAULT NULL,
  `str_utiphone` varchar(20) DEFAULT NULL,
  `str_utimail` varchar(150) DEFAULT NULL,
  `dt_uticreated` timestamp NULL DEFAULT NULL,
  `dt_utiupdated` timestamp NULL DEFAULT NULL,
  `lg_uticreatedid` varchar(40) NOT NULL,
  `lg_utiupdatedid` varchar(40) DEFAULT NULL,
  `str_utistatut` varchar(20) DEFAULT 'enable',
  `str_utilogin` varchar(40) DEFAULT NULL,
  `dt_utilastconnected` timestamp NULL DEFAULT NULL,
  `dt_utilastpasschanged` timestamp NULL DEFAULT NULL,
  `lg_proid` varchar(40) NOT NULL,
  `str_utipic` varchar(100) DEFAULT NULL,
  `str_utitoken` varchar(120) DEFAULT NULL,
  `str_utipassword` varchar(250) DEFAULT NULL,
  `lg_ageid` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`lg_utiid`, `str_utifirstlastname`, `str_utiphone`, `str_utimail`, `dt_uticreated`, `dt_utiupdated`, `lg_uticreatedid`, `lg_utiupdatedid`, `str_utistatut`, `str_utilogin`, `dt_utilastconnected`, `dt_utilastpasschanged`, `lg_proid`, `str_utipic`, `str_utitoken`, `str_utipassword`, `lg_ageid`) VALUES
('1', 'ngbeadego martial', '22541513892', 'ngbeadego.martial@gmail.com', '2020-11-04 08:00:00', NULL, '1', NULL, 'enable', 'marco', '2025-01-11 23:42:54', NULL, '1', 'default.png', 'sdv062SSrh0Ry1ig4pLn', '39dfa55283318d31afe5a3ff4a0e3253e2045e43', '1'),
('2', 'Edmond Kouakou', '2250102030405', 'Edmond.kouakou@gmail.com', '2020-11-04 08:00:00', NULL, '1', NULL, 'enable', 'edmond', '2025-01-11 23:53:11', NULL, '1', 'default.png', 'UVF71gGIrnZgUo8PMn1m', '39dfa55283318d31afe5a3ff4a0e3253e2045e43', '2'),
('3', 'Michaelle Brou', '2250102030405', 'mika.brou@gmail.com', '2020-11-04 08:00:00', NULL, '1', NULL, 'enable', 'mika', '2024-07-27 23:44:48', NULL, '1', 'default.png', 'i42sJ4IeGptoiXRbTRUB', '39dfa55283318d31afe5a3ff4a0e3253e2045e43', '1'),
('nuIGjosaWAJopBSubY9t', 'Demo', '0506566197', 'ngbeadego.martial@gmail.com', '2024-08-25 04:38:12', '2024-08-26 01:53:30', '1', 'QLooLxr3OB7pke4Tb598', 'delete', 'demotest', '2024-08-25 04:40:21', NULL, '1', 'default.png', 'oJlzSEVPBacljjQyQf11', '8836c012772867d1639ec454024f319e050536fb', '1'),
('QLooLxr3OB7pke4Tb598', 'Eddy kouassi', '0506566197', 'martial.ngbeadego@nkm-technology.net', '2024-08-25 04:48:12', '2024-08-26 01:55:47', '1', '1', 'enable', 'eddy.kouassi', '2024-08-26 02:21:18', NULL, '2', '1724536092-cc_ol_220065.jpg', '', '9779dbf43b26a4801cd3e602683d0bebd934b782', '1'),
('wSd4MBNuxar0kiaVuzzd', 'ANDI Epse NGBEADEGO Angèle', '0141513892', 'ngbeadego.martial@gmail.com', '2024-08-28 17:21:52', NULL, '1', NULL, 'enable', 'angele', '2024-08-28 17:25:00', NULL, '1', '1724840512-cc_ol_220065.jpg', 'uFDZIUZbGLlAccueUV87', '39dfa55283318d31afe5a3ff4a0e3253e2045e43', '1');

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `v_eventcoming`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `v_eventcoming` (
`lg_eveid` varchar(40)
,`str_evename` varchar(150)
,`str_evedescription` varchar(1000)
,`dt_evebegin` date
,`dt_eveend` date
,`hr_evebegin` varchar(10)
,`hr_eveend` varchar(10)
,`str_evepic` varchar(150)
,`str_evebanner` varchar(150)
,`lg_lstid` varchar(40)
,`str_lstdescription` varchar(200)
,`lg_lstplaceid` varchar(40)
,`str_lstdescriptionplace` varchar(200)
,`str_eveannonceur` varchar(150)
,`str_evetype` varchar(1)
,`nombre` int(1)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `v_eventview`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `v_eventview` (
`lg_eveid` varchar(40)
,`str_evename` varchar(150)
,`str_evedescription` varchar(1000)
,`dt_evebegin` date
,`dt_eveend` date
,`hr_evebegin` varchar(10)
,`hr_eveend` varchar(10)
,`str_evepic` varchar(150)
,`str_evebanner` varchar(150)
,`lg_lstid` varchar(40)
,`str_lstdescription` varchar(200)
,`lg_lstplaceid` varchar(40)
,`str_lstdescriptionplace` varchar(200)
,`str_eveannonceur` varchar(150)
,`str_evetype` varchar(1)
,`nombre` int(11)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `v_topsell`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `v_topsell` (
`lg_eveid` varchar(40)
,`str_evename` varchar(150)
,`str_evedescription` varchar(1000)
,`dt_evebegin` date
,`dt_eveend` date
,`hr_evebegin` varchar(10)
,`hr_eveend` varchar(10)
,`str_evepic` varchar(150)
,`str_evebanner` varchar(150)
,`lg_lstid` varchar(40)
,`str_lstdescription` varchar(200)
,`lg_lstplaceid` varchar(40)
,`str_lstdescriptionplace` varchar(200)
,`str_eveannonceur` varchar(150)
,`str_evetype` varchar(1)
,`nombre` bigint(21)
);

-- --------------------------------------------------------

--
-- Structure de la vue `v_eventcoming`
--
DROP TABLE IF EXISTS `v_eventcoming`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_eventcoming`  AS SELECT `e`.`lg_eveid` AS `lg_eveid`, `e`.`str_evename` AS `str_evename`, `e`.`str_evedescription` AS `str_evedescription`, `e`.`dt_evebegin` AS `dt_evebegin`, `e`.`dt_eveend` AS `dt_eveend`, `e`.`hr_evebegin` AS `hr_evebegin`, `e`.`hr_eveend` AS `hr_eveend`, `e`.`str_evepic` AS `str_evepic`, `e`.`str_evebanner` AS `str_evebanner`, `l`.`lg_lstid` AS `lg_lstid`, `l`.`str_lstdescription` AS `str_lstdescription`, `p`.`lg_lstid` AS `lg_lstplaceid`, `p`.`str_lstdescription` AS `str_lstdescriptionplace`, `e`.`str_eveannonceur` AS `str_eveannonceur`, '2' AS `str_evetype`, 0 AS `nombre` FROM ((`evenement` `e` join `liste` `l`) join (select `li`.`lg_lstid` AS `lg_lstid`,`li`.`str_lstdescription` AS `str_lstdescription` from `liste` `li` where (`li`.`lg_tylid` = '7')) `p`) WHERE ((`e`.`lg_lstid` = `l`.`lg_lstid`) AND (`p`.`lg_lstid` = `e`.`lg_lstplaceid`) AND (`e`.`dt_evebegin` between curdate() and (curdate() - interval -(3) day)) AND (not(`e`.`lg_eveid` in (select `v`.`lg_eveid` from `v_topsell` `v`)))) ORDER BY `e`.`dt_evebegin` ASC, `e`.`hr_evebegin` ASC LIMIT 0, 22  ;

-- --------------------------------------------------------

--
-- Structure de la vue `v_eventview`
--
DROP TABLE IF EXISTS `v_eventview`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_eventview`  AS SELECT `e`.`lg_eveid` AS `lg_eveid`, `e`.`str_evename` AS `str_evename`, `e`.`str_evedescription` AS `str_evedescription`, `e`.`dt_evebegin` AS `dt_evebegin`, `e`.`dt_eveend` AS `dt_eveend`, `e`.`hr_evebegin` AS `hr_evebegin`, `e`.`hr_eveend` AS `hr_eveend`, `e`.`str_evepic` AS `str_evepic`, `e`.`str_evebanner` AS `str_evebanner`, `l`.`lg_lstid` AS `lg_lstid`, `l`.`str_lstdescription` AS `str_lstdescription`, `p`.`lg_lstid` AS `lg_lstplaceid`, `p`.`str_lstdescription` AS `str_lstdescriptionplace`, `e`.`str_eveannonceur` AS `str_eveannonceur`, '3' AS `str_evetype`, `e`.`int_evenumberread` AS `nombre` FROM ((`evenement` `e` join `liste` `l`) join (select `li`.`lg_lstid` AS `lg_lstid`,`li`.`str_lstdescription` AS `str_lstdescription` from `liste` `li` where (`li`.`lg_tylid` = '7')) `p`) WHERE ((`e`.`lg_lstid` = `l`.`lg_lstid`) AND (`p`.`lg_lstid` = `e`.`lg_lstplaceid`) AND (`e`.`dt_evebegin` >= now()) AND (not(`e`.`lg_eveid` in (select `ec`.`lg_eveid` from `v_eventcoming` `ec` union (select `ts`.`lg_eveid` from `v_topsell` `ts`))))) ORDER BY `nombre` DESC LIMIT 0, 22  ;

-- --------------------------------------------------------

--
-- Structure de la vue `v_topsell`
--
DROP TABLE IF EXISTS `v_topsell`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_topsell`  AS SELECT `e`.`lg_eveid` AS `lg_eveid`, `e`.`str_evename` AS `str_evename`, `e`.`str_evedescription` AS `str_evedescription`, `e`.`dt_evebegin` AS `dt_evebegin`, `e`.`dt_eveend` AS `dt_eveend`, `e`.`hr_evebegin` AS `hr_evebegin`, `e`.`hr_eveend` AS `hr_eveend`, `e`.`str_evepic` AS `str_evepic`, `e`.`str_evebanner` AS `str_evebanner`, `l`.`lg_lstid` AS `lg_lstid`, `l`.`str_lstdescription` AS `str_lstdescription`, `p`.`lg_lstid` AS `lg_lstplaceid`, `p`.`str_lstdescription` AS `str_lstdescriptionplace`, `e`.`str_eveannonceur` AS `str_eveannonceur`, '1' AS `str_evetype`, count(`t`.`lg_ticid`) AS `nombre` FROM (((`ticket` `t` join `evenement` `e`) join `liste` `l`) join (select `li`.`lg_lstid` AS `lg_lstid`,`li`.`str_lstdescription` AS `str_lstdescription` from `liste` `li` where (`li`.`lg_tylid` = '7')) `p`) WHERE ((`t`.`lg_eveid` = `e`.`lg_eveid`) AND (`e`.`lg_lstid` = `l`.`lg_lstid`) AND (`p`.`lg_lstid` = `e`.`lg_lstplaceid`) AND (`t`.`str_ticstatut` = 'enable') AND (`e`.`dt_evebegin` >= now())) GROUP BY `e`.`lg_eveid`, `e`.`str_evename`, `e`.`str_evedescription`, `e`.`dt_evebegin`, `e`.`dt_eveend`, `e`.`hr_evebegin`, `e`.`hr_eveend`, `e`.`str_evepic`, `e`.`str_evebanner`, `l`.`lg_lstid`, `l`.`str_lstdescription`, `p`.`lg_lstid`, `p`.`str_lstdescription` ORDER BY `nombre` DESC LIMIT 0, 33  ;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `abonnement`
--
ALTER TABLE `abonnement`
  ADD PRIMARY KEY (`lg_aboid`) USING BTREE;

--
-- Index pour la table `agence`
--
ALTER TABLE `agence`
  ADD PRIMARY KEY (`lg_ageid`),
  ADD KEY `agence_fk1` (`lg_socid`);

--
-- Index pour la table `banniere`
--
ALTER TABLE `banniere`
  ADD PRIMARY KEY (`lg_banid`) USING BTREE,
  ADD KEY `banniere_fk1` (`lg_ageid`) USING BTREE;

--
-- Index pour la table `cashtransaction`
--
ALTER TABLE `cashtransaction`
  ADD PRIMARY KEY (`lg_ctrid`),
  ADD KEY `cashtransaction_fk1` (`lg_uticreatedid`),
  ADD KEY `cashtransaction_fk2` (`lg_ageid`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`lg_cliid`) USING BTREE;

--
-- Index pour la table `eveliste`
--
ALTER TABLE `eveliste`
  ADD PRIMARY KEY (`lg_eliid`) USING BTREE,
  ADD KEY `FK_eveliste_evenement` (`lg_eveid`),
  ADD KEY `FK_eveliste_liste` (`lg_lstid`),
  ADD KEY `FK_eveliste_utilisateur` (`lg_uticreatedid`);

--
-- Index pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`lg_eveid`) USING BTREE,
  ADD KEY `fk_evenement_liste` (`lg_lstid`) USING BTREE,
  ADD KEY `FK_evenement_utilisateur` (`lg_uticreatedid`) USING BTREE,
  ADD KEY `FK_evenement_agence` (`lg_ageid`),
  ADD KEY `FK_evenement_place_liste` (`lg_lstplaceid`);

--
-- Index pour la table `liste`
--
ALTER TABLE `liste`
  ADD PRIMARY KEY (`lg_lstid`),
  ADD KEY `liste_fk1` (`lg_tylid`),
  ADD KEY `liste_fk2` (`lg_uticreatedid`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`lg_notid`);

--
-- Index pour la table `operateur`
--
ALTER TABLE `operateur`
  ADD PRIMARY KEY (`lg_opeid`) USING BTREE,
  ADD KEY `fk_operateur_utilisateur` (`lg_uticreatedid`);

--
-- Index pour la table `privilege`
--
ALTER TABLE `privilege`
  ADD PRIMARY KEY (`lg_priid`) USING BTREE,
  ADD KEY `fk_privilege_utilisateur` (`lg_uticreatedid`);

--
-- Index pour la table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`lg_proid`) USING BTREE,
  ADD KEY `fk_profile_utilisateur` (`lg_uticreatedid`);

--
-- Index pour la table `profile_privilege`
--
ALTER TABLE `profile_privilege`
  ADD PRIMARY KEY (`lg_pprid`) USING BTREE,
  ADD KEY `fk_profile_privilege_profile` (`lg_proid`),
  ADD KEY `fk_profile_privilege_privilege` (`lg_priid`);

--
-- Index pour la table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`lg_repid`);

--
-- Index pour la table `snapshotcaday`
--
ALTER TABLE `snapshotcaday`
  ADD PRIMARY KEY (`lg_scaid`) USING BTREE,
  ADD KEY `fk_snapshotcaday_societe` (`lg_socid`),
  ADD KEY `fk_snapshotcaday_operateur` (`lg_opeid`);

--
-- Index pour la table `societe`
--
ALTER TABLE `societe`
  ADD PRIMARY KEY (`lg_socid`),
  ADD KEY `fk_societe_utilisateur` (`lg_uticreatedid`);

--
-- Index pour la table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`lg_ticid`) USING BTREE,
  ADD KEY `FK_ticket_evenement` (`lg_eveid`),
  ADD KEY `FK_ticket_liste` (`lg_lstid`),
  ADD KEY `FK_ticket_client` (`lg_cliid`);

--
-- Index pour la table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`lg_traid`) USING BTREE,
  ADD KEY `fk_transaction_operateur` (`lg_opeid`),
  ADD KEY `fk_transaction_typetransaction` (`lg_ttrid`),
  ADD KEY `fk_transaction_societe_utilisateur` (`lg_sutid`);

--
-- Index pour la table `typeliste`
--
ALTER TABLE `typeliste`
  ADD PRIMARY KEY (`lg_tylid`),
  ADD KEY `typeliste_fk1` (`lg_uticreatedid`);

--
-- Index pour la table `typetransaction`
--
ALTER TABLE `typetransaction`
  ADD PRIMARY KEY (`lg_ttrid`) USING BTREE;

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`lg_utiid`) USING BTREE,
  ADD KEY `fk_utilisateur_utilisateur` (`lg_uticreatedid`),
  ADD KEY `fk_utilisateur_profile` (`lg_proid`),
  ADD KEY `lg_socid` (`lg_ageid`) USING BTREE;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `agence`
--
ALTER TABLE `agence`
  ADD CONSTRAINT `agence_fk1` FOREIGN KEY (`lg_socid`) REFERENCES `societe` (`lg_socid`);

--
-- Contraintes pour la table `banniere`
--
ALTER TABLE `banniere`
  ADD CONSTRAINT `banniere_fk1` FOREIGN KEY (`lg_ageid`) REFERENCES `agence` (`lg_ageid`);

--
-- Contraintes pour la table `cashtransaction`
--
ALTER TABLE `cashtransaction`
  ADD CONSTRAINT `cashtransaction_fk1` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`),
  ADD CONSTRAINT `cashtransaction_fk2` FOREIGN KEY (`lg_ageid`) REFERENCES `agence` (`lg_ageid`);

--
-- Contraintes pour la table `eveliste`
--
ALTER TABLE `eveliste`
  ADD CONSTRAINT `FK_eveliste_evenement` FOREIGN KEY (`lg_eveid`) REFERENCES `evenement` (`lg_eveid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_eveliste_liste` FOREIGN KEY (`lg_lstid`) REFERENCES `liste` (`lg_lstid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_eveliste_utilisateur` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `FK_evenement_agence` FOREIGN KEY (`lg_ageid`) REFERENCES `agence` (`lg_ageid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_evenement_place_liste` FOREIGN KEY (`lg_lstplaceid`) REFERENCES `liste` (`lg_lstid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_evenement_utilisateur` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_evenement_liste` FOREIGN KEY (`lg_lstid`) REFERENCES `liste` (`lg_lstid`);

--
-- Contraintes pour la table `liste`
--
ALTER TABLE `liste`
  ADD CONSTRAINT `liste_fk1` FOREIGN KEY (`lg_tylid`) REFERENCES `typeliste` (`lg_tylid`),
  ADD CONSTRAINT `liste_fk2` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`);

--
-- Contraintes pour la table `operateur`
--
ALTER TABLE `operateur`
  ADD CONSTRAINT `fk_operateur_utilisateur` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`);

--
-- Contraintes pour la table `privilege`
--
ALTER TABLE `privilege`
  ADD CONSTRAINT `fk_privilege_utilisateur` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`);

--
-- Contraintes pour la table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `fk_profile_utilisateur` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`);

--
-- Contraintes pour la table `profile_privilege`
--
ALTER TABLE `profile_privilege`
  ADD CONSTRAINT `fk_profile_privilege_privilege` FOREIGN KEY (`lg_priid`) REFERENCES `privilege` (`lg_priid`),
  ADD CONSTRAINT `fk_profile_privilege_profile` FOREIGN KEY (`lg_proid`) REFERENCES `profile` (`lg_proid`);

--
-- Contraintes pour la table `snapshotcaday`
--
ALTER TABLE `snapshotcaday`
  ADD CONSTRAINT `fk_snapshotcaday_operateur` FOREIGN KEY (`lg_opeid`) REFERENCES `operateur` (`lg_opeid`),
  ADD CONSTRAINT `fk_snapshotcaday_societe` FOREIGN KEY (`lg_socid`) REFERENCES `societe` (`lg_socid`);

--
-- Contraintes pour la table `societe`
--
ALTER TABLE `societe`
  ADD CONSTRAINT `fk_societe_utilisateur` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`);

--
-- Contraintes pour la table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `FK_ticket_client` FOREIGN KEY (`lg_cliid`) REFERENCES `client` (`lg_cliid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ticket_evenement` FOREIGN KEY (`lg_eveid`) REFERENCES `evenement` (`lg_eveid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ticket_liste` FOREIGN KEY (`lg_lstid`) REFERENCES `liste` (`lg_lstid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `fk_transaction_operateur` FOREIGN KEY (`lg_opeid`) REFERENCES `operateur` (`lg_opeid`),
  ADD CONSTRAINT `fk_transaction_societe_utilisateur` FOREIGN KEY (`lg_sutid`) REFERENCES `societe_utilisateur` (`lg_sutid`),
  ADD CONSTRAINT `fk_transaction_typetransaction` FOREIGN KEY (`lg_ttrid`) REFERENCES `typetransaction` (`lg_ttrid`);

--
-- Contraintes pour la table `typeliste`
--
ALTER TABLE `typeliste`
  ADD CONSTRAINT `typeliste_fk1` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`);

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `FK_utilisateur_agence` FOREIGN KEY (`lg_ageid`) REFERENCES `agence` (`lg_ageid`),
  ADD CONSTRAINT `fk_utilisateur_profile` FOREIGN KEY (`lg_proid`) REFERENCES `profile` (`lg_proid`),
  ADD CONSTRAINT `fk_utilisateur_utilisateur` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`),
  ADD CONSTRAINT `utilisateur_fk1` FOREIGN KEY (`lg_ageid`) REFERENCES `agence` (`lg_ageid`),
  ADD CONSTRAINT `utilisateur_fk2` FOREIGN KEY (`lg_proid`) REFERENCES `profile` (`lg_proid`),
  ADD CONSTRAINT `utilisateur_fk3` FOREIGN KEY (`lg_uticreatedid`) REFERENCES `utilisateur` (`lg_utiid`);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
