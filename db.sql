USE [web2]
GO
/****** Object:  Table [dbo].[Users]    Script Date: domingo, 6 de noviembre 21:50:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[IdUser] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](50) NOT NULL,
	[LastName] [varchar](100) NOT NULL,
	[Email] [varchar](100) NOT NULL,
	[Pwd] [varchar](300) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[IdUser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[UserDelete]    Script Date: domingo, 6 de noviembre 21:50:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UserDelete]   
-- Parametros
	@IdUser int  
AS   
    SET NOCOUNT ON;  
    DELETE FROM Users WHERE IdUser=@IdUser
GO
/****** Object:  StoredProcedure [dbo].[UserList]    Script Date: domingo, 6 de noviembre 21:50:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UserList]  
AS   
    SET NOCOUNT ON;  
    SELECT IdUser AS ID, CONCAT(FirstName,' ', LastName) AS FullName,
	Email FROM Users
GO
/****** Object:  StoredProcedure [dbo].[UserRegister]    Script Date: domingo, 6 de noviembre 21:50:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UserRegister]  
-- Parametros
    @FirstName varchar(50), 
	@LastName varchar(100), 
	@Email varchar(100), 
    @Pwd varchar(300)   
AS   
    SET NOCOUNT ON;  
    INSERT INTO USERS VALUES(@FirstName, @LastName, @Email, @Pwd)  
GO
/****** Object:  StoredProcedure [dbo].[UserUpdate]    Script Date: domingo, 6 de noviembre 21:50:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UserUpdate]   
-- Parametros
	@IdUser int,
    @FirstName varchar(50), 
	@LastName varchar(100), 
	@Email varchar(100), 
    @Pwd varchar(300)   
AS   
    SET NOCOUNT ON;  
    UPDATE Users SET FirstName=@FirstName, LastName=@LastName,
	Email=@Email, Pwd=@Pwd WHERE IdUser=@IdUser 
GO
