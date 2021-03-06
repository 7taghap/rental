/****** mst_user **********/
INSERT INTO `realmaster`.`mst_user`
(`id`,`username`,`name`,`email`,`mobile_no`,`tel_no`,`address1`,`address2`,`status`)
VALUES(1'Rey','Rey','Rey@email.com','09954645794','2399970','cebu city','Lapulapu City','active');
/******* mst_apartment ***********/
INSERT INTO `realmaster`.`mst_apartment` (`id`,`name`,`personIncharge`,`aptType`,`mobileNo`,`telNo`,`address1`,`address2`,`status`) VALUES('1','buhisan','paul','apartment','234234234','234234','labangon',null,'Active');
INSERT INTO `realmaster`.`mst_apartment` (`id`, `name`, `personIncharge`, `aptType`, `status`) VALUES ('2', 'Lapulapu', 'Paul', 'apartment', 'Active');
INSERT INTO `realmaster`.`mst_apartment` (`id`, `name`, `personIncharge`, `aptType`, `status`) VALUES ('3', 'Shrie', 'Paule', 'store', 'Active');


/*************** rooms *******************/
INSERT INTO `realmaster`.`mst_room` (`id`, `aptId`, `floor`, `roomNo`, `roomType`, `size`, `status`) VALUES ('1', '1', '1', '1', 'standard', '1', 'active');
INSERT INTO `realmaster`.`mst_room` (`id`, `aptId`, `floor`, `roomNo`, `roomType`, `size`, `status`) VALUES ('2', '1', '1', '2', 'standard', '1', 'active');
INSERT INTO `realmaster`.`mst_room` (`id`, `aptId`, `floor`, `roomNo`, `roomType`, `size`, `status`) VALUES ('3', '1', '2', '1', 'double', '2', 'active');
INSERT INTO `realmaster`.`mst_room` (`id`, `aptId`, `floor`, `roomNo`, `roomType`, `size`, `status`) VALUES ('4', '1', '2', '2', 'double', '1', 'active');
INSERT INTO `realmaster`.`mst_room` (`id`, `aptId`, `floor`, `roomNo`, `roomType`, `size`, `status`) VALUES ('5', '2', '1', '1', 'house', '1', 'active');

/*************** renters ******************/

INSERT INTO `realmaster`.`tx_rental` (`id`, `aptId`, `roomId`, `dueDate`, `txDate`, `startDate`, `endDate`, `deposit`, `renterId`, `balance`, `txType`, `amount`, `status`,`userId`) VALUES ('1', '1', '1', '2016-09-29', '2016-08-01', '2016-09-01', null, '5000', '1', '0', '1', '5000', 'active','1');