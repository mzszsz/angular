-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 03, 2015 at 04:20 PM
-- Server version: 5.6.19-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `angular`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=48 ;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `price`, `author`) VALUES
(1, 'book1', '100', 'manish'),
(2, 'book1', '100', 'manish'),
(3, 'book1', '100', 'manish'),
(4, 'book1', '100', 'manish'),
(5, 'book1', '100', 'manish'),
(6, 'book1', '100', 'manish'),
(7, 'bk', '22', 'we'),
(8, 'ww', '34', 'w'),
(9, '88', '88', '88'),
(10, 'ghgh', '4856', 'wew'),
(11, 'ghg', '22', 'dfgd'),
(12, 'ghg', '22', 'dfgd'),
(13, 'jj', '78', 'kj'),
(14, 'jj', '78', 'kj'),
(15, '', '', ''),
(16, 'fdg', 'dfg', 'fgd'),
(17, 'fdg', 'dfg', 'fgd'),
(18, 'fgd', 'fg', 'gf'),
(19, 'fgd', 'fg', 'gf'),
(20, 'q', 'q', 'q'),
(21, 'q', 'q', 'q'),
(22, 'e', 'e', 'e'),
(23, 'e', 'e', 'e'),
(24, '', '', ''),
(25, '', '', ''),
(26, '898', '12', '89'),
(27, '898', '12', '89'),
(28, '', '', ''),
(29, '', '', ''),
(30, '', '', ''),
(31, '', '', ''),
(32, 'aa', 'aa', 'aa'),
(33, 'aa', 'aa', 'aa'),
(34, '', '', ''),
(35, '', '', ''),
(36, '', '', ''),
(37, '', '', ''),
(38, '', '', ''),
(39, '', '', ''),
(40, '', '', ''),
(41, '', '', ''),
(42, '234', 'R', '3'),
(43, '234', '22', 'aa'),
(44, '898', '78', 'aa'),
(45, 'd', 'd', 'd'),
(46, 'f', 'f', 'f'),
(47, 'dgdfs', '2342', 'dsg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
