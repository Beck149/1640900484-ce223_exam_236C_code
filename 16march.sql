-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2022 at 05:44 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thotsawat_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `16march`
--

CREATE TABLE `16march` (
  `id` int(11) NOT NULL,
  `draw` int(10) NOT NULL,
  `no` int(10) NOT NULL,
  `Category` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `prize` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `16march`
--

INSERT INTO `16march` (`id`, `draw`, `no`, `Category`, `date`, `prize`) VALUES
(1, 737867, 1, 'รางวัลที่1', '16 มีนาคม 2565', '6,000,000 บาท'),
(2, 757838, 1, 'รางวัลที่2', '16 มีนาคม 2565', '200,000 บาท'),
(3, 468367, 2, 'รางวัลที่2', '16 มีนาคม 2565', '200,000 บาท'),
(4, 324448, 3, 'รางวัลที่2', '16 มีนาคม 2565', '200,000 บาท'),
(5, 403216, 4, 'รางวัลที่2', '16 มีนาคม 2565', '200,000 บาท'),
(6, 759477, 5, 'รางวัลที่2', '16 มีนาคม 2565', '200,000 บาท'),
(7, 68, 1, 'รางวัลเลขท้าย 2 ตัว	', '16 มีนาคม 2565', '2,000 บาท\n'),
(8, 970618, 1, 'รางวัลที่1	', '1 เมษายน 2565', '6,000,000 บาท\n'),
(9, 171472, 1, 'รางวัลที่2	', '1 เมษายน 2565', '200,000 บาท\n'),
(10, 750408, 2, 'รางวัลที่2	', '1 เมษายน 2565', '200,000 บาท\n'),
(11, 754915, 3, 'รางวัลที่2	', '1 เมษายน 2565', '200,000 บาท\n'),
(12, 127641, 4, 'รางวัลที่2	', '1 เมษายน 2565', '200,000 บาท\n'),
(13, 240029, 5, 'รางวัลที่2	', '1 เมษายน 2565', '200,000 บาท\n'),
(14, 10, 1, 'รางวัลเลขท้าย 2 ตัว	', '1 เมษายน 2565', '2,000 บาท\n'),
(15, 395919, 1, 'รางวัลที่1	', '16 เมษายน 2526', '6,000,000 บาท\n'),
(16, 288325, 1, 'รางวัลที่2', '16 เมษายน 2526', '200,000 บาท\n'),
(17, 691078, 2, 'รางวัลที่2', '16 เมษายน 2526', '200,000 บาท\n'),
(18, 345563, 3, 'รางวัลที่2', '16 เมษายน 2526', '200,000 บาท\n'),
(19, 120215, 4, 'รางวัลที่2', '16 เมษายน 2526', '200,000 บาท\n'),
(20, 189228, 5, 'รางวัลที่2', '16 เมษายน 2526', '200,000 บาท\n'),
(21, 58, 1, 'รางวัลเลขทาย 2 ตัว	', '16 เมษายน 2526', '2,000 บาท');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `16march`
--
ALTER TABLE `16march`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `16march`
--
ALTER TABLE `16march`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
