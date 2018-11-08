-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 08, 2018 at 02:24 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `infographic`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_addicts`
--

CREATE TABLE `tbl_addicts` (
  `addicts_id` int(10) UNSIGNED NOT NULL,
  `addicts_label` varchar(50) CHARACTER SET latin1 NOT NULL,
  `addicts_headline` varchar(50) CHARACTER SET latin1 NOT NULL,
  `addicts_copy` text CHARACTER SET latin1 NOT NULL,
  `linking` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_addicts`
--

INSERT INTO `tbl_addicts` (`addicts_id`, `addicts_label`, `addicts_headline`, `addicts_copy`, `linking`) VALUES
(1, 'Male', 'Men are first', 'Men make up 78% of the coffee addicts around the world.', 999),
(2, 'Female', 'Female are second', 'Females only make 22% of the coffee addicts around the world.', 998);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_addicts`
--
ALTER TABLE `tbl_addicts`
  ADD PRIMARY KEY (`addicts_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_addicts`
--
ALTER TABLE `tbl_addicts`
  MODIFY `addicts_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
