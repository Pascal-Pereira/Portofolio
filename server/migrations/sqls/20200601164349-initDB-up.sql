CREATE TABLE `projet` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50), 
  `description` varchar(1500), 
  `urlReference` varchar(50),
  `projectLink` varchar(255),
  `jobTitle` varchar(50), 
  `client` varchar(50), 
  `bio` varchar(1500), 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE `perso` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bio` varchar(1500), 
  `jobTitle` varchar(50), 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE `skill` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50), 
  `urlName` varchar(1500), 
  `image` varchar(50),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE `project_skill` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `project_id` int(10),
  `skill_id` int(10),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;