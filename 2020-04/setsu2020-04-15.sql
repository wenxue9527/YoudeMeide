-- 1. 创建数据库
CREATE DATABASE edu20200415;

-- 2. 使用数据库
USE edu20200415;

-- 3. 创建部门表
DROP TABLE IF EXISTS `dept`;

CREATE TABLE `dept` (
  `deptno` int(2) NOT NULL COMMENT '部门ID',
  `dname` varchar(14) DEFAULT NULL COMMENT '部门名称',
  `loc` varchar(13) DEFAULT NULL COMMENT '所在地',
  PRIMARY KEY (`deptno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `dept` WRITE;
/*!40000 ALTER TABLE `dept` DISABLE KEYS */;

-- 初始化部门表数据
INSERT INTO `dept` (`deptno`, `dname`, `loc`)
VALUES
	(10,'开发部','东京'),
	(20,'测试部','东京'),
	(30,'人力资源部','东京'),
	(40,'销售部','大阪'),
	(50,'研究所','京都'),
	(60,'运营部','名古屋');

/*!40000 ALTER TABLE `dept` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table emp
# ------------------------------------------------------------

-- 创建员工表
DROP TABLE IF EXISTS `emp`;

CREATE TABLE `emp` (
  `empno` int(4) NOT NULL COMMENT '员工编号',
  `ename` varchar(10) NOT NULL DEFAULT '' COMMENT '员工姓名',
  `job` varchar(10) DEFAULT NULL COMMENT '职位',
  `mgr` int(4) DEFAULT NULL COMMENT '上级ID',
  `hiredate` date DEFAULT NULL COMMENT '入职时间',
  `sal` int(7) DEFAULT NULL COMMENT '薪资',
  `deptno` int(2) DEFAULT NULL COMMENT '部门ID',
  PRIMARY KEY (`empno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `emp` WRITE;
/*!40000 ALTER TABLE `emp` DISABLE KEYS */;

-- 初始化员工表数据
INSERT INTO `emp` (`empno`, `ename`, `job`, `mgr`, `hiredate`, `sal`, `deptno`)
VALUES
	(7369,'周伯通','测试',7566,'2019-01-01',800,20),
	(7499,'欧阳克','销售',7900,'2018-02-20',1600,40),
	(7521,'周芷若','HR',7844,'2018-02-22',1250,30),
	(7566,'杨康','部门经理',7839,'2018-04-02',2975,20),
	(7654,'张无忌','开发',7698,'2018-09-28',4250,50),
	(7698,'张三丰','研究总管',7839,'2018-05-01',5850,50),
	(7782,'黄蓉','部门经理',7839,'2018-06-09',3450,10),
	(7788,'杨过','自动化测试',7566,'2018-04-19',3000,20),
	(7839,'郭靖','总管',NULL,'2018-11-17',5000,10),
	(7844,'灭绝师太','HRBP',7839,'2018-09-08',1500,30),
	(7876,'小龙女','测试',7566,'2018-05-23',1500,20),
	(7900,'欧阳锋','销售经理',7839,'2018-12-03',1950,40),
	(7902,'李莫愁','性能测试',7566,'2018-12-03',3100,20),
	(7934,'郭襄','开发',7782,'2018-01-23',3000,10);

/*!40000 ALTER TABLE `emp` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
