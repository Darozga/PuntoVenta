create database PuntoVenta
go

use PuntoVenta
go

CREATE TABLE Usuario (
	Id INT IDENTITY(1,1),
	UserName varchar(255) not null,
	UserPassword varchar(255) not null,
	
	CONSTRAINT PK_UserApp PRIMARY KEY (Id)
)
go


CREATE TABLE Articulo (
	Id varchar(255) not null,
	Nombre varchar(255) not null,
	Precio decimal (10,2) not null,
	IVA bit not null,
	CONSTRAINT PK_Articulos PRIMARY KEY (Id)
)
go

CREATE TABLE Encabezado (
	Id INT IDENTITY(1,1),
	UserName varchar(255) not null,
	Fecha date not null,
	total decimal (10,2) not null,
	CONSTRAINT PK_Encabezado PRIMARY KEY (Id)
)
go

CREATE TABLE Detalle_Factura (
	Id INT,
	Encabezado_Id int,
	Articulo_Id varchar(255),
	Precio decimal(10,2) not null,
	IVA decimal(10,2) not null,
	Cantidad int not null,
	Total decimal(10,2) not null,
	CONSTRAINT PK_Detalle_Factura PRIMARY KEY (Id, Encabezado_Id),

	FOREIGN KEY (Encabezado_Id) REFERENCES Encabezado(Id),

	FOREIGN KEY (Articulo_Id) REFERENCES Articulo(Id),
)
go

INSERT INTO Articulo (Id, Nombre, Precio, IVA)
VALUES ('ART01','Teclado',30000, 1)
go

INSERT INTO Usuario (UserName, UserPassword)
VALUES ('darozga', '123456');
go

INSERT INTO Usuario (UserName, UserPassword)
VALUES ('prueba', '123456');
go

Insert into Encabezado (UserName,Fecha,total)
VALUES ('darozga', '2022-03-03',2130)
go

Insert into Detalle_Factura (Id, Encabezado_Id, Articulo_Id, Precio, IVA, Cantidad, Total)
VALUES (1,1, 'ART01', 30000, 7800, 2, 60000)
go

Insert into Detalle_Factura (Id, Encabezado_Id, Articulo_Id, Precio, IVA, Cantidad, Total)
VALUES (2,1, 'ART01', 30000, 7800, 2, 60000)
go

