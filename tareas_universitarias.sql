-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2024 a las 06:09:16
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tareas_universitarias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id`, `descripcion`) VALUES
(1, 'En-espera'),
(2, 'En-progreso'),
(3, 'Finalizada'),
(4, 'Pausada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(120) NOT NULL,
  `inicio` datetime NOT NULL,
  `limite` datetime DEFAULT NULL,
  `id_estado` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id`, `descripcion`, `inicio`, `limite`, `id_estado`, `id_tipo`) VALUES
(1, 'Examen de redes 2', '2024-03-11 13:09:59', NULL, 1, 2),
(2, 'Examen de redes 2', '2024-03-11 13:09:59', '2024-03-13 13:30:00', 1, 2),
(3, 'tarea Atemporal', '2024-03-11 13:09:59', '2024-03-13 13:30:00', 1, 2),
(4, 'tarea no temporal', '2024-03-11 13:09:59', '2024-03-13 13:30:00', 1, 3),
(5, 'Tarea temporal', '2024-03-11 13:09:59', '2024-03-13 13:30:00', 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_tarea`
--

CREATE TABLE `tipo_tarea` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_tarea`
--

INSERT INTO `tipo_tarea` (`id`, `descripcion`) VALUES
(1, 'Proyecto'),
(2, 'Examen'),
(3, 'Tarea'),
(4, 'Sesion de estudio');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Tareas_Estado` (`id_estado`),
  ADD KEY `Tareas_Tipo_tareas` (`id_tipo`);

--
-- Indices de la tabla `tipo_tarea`
--
ALTER TABLE `tipo_tarea`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_tarea`
--
ALTER TABLE `tipo_tarea`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `Tareas_Estado` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id`),
  ADD CONSTRAINT `Tareas_Tipo_tareas` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_tarea` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
