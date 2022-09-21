using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PuntoVenta.Entities;
using PuntoVenta.WebApi.Models;

namespace PuntoVenta.DataAccess
{
    public class PuntoVentaDbContext : DbContext
    {
        public PuntoVentaDbContext()
        {
            
        }

        public PuntoVentaDbContext(DbContextOptions<PuntoVentaDbContext> options) : base(options)
        {
            
        }

        /// <summary>
        /// Propiedad que hace refrencia a la entidad Usuario
        /// Creado Por: Daniel Rodriguez
        /// Fecha 19-09-2022
        /// </summary>
        public DbSet<Usuario> Usuario { get; set; }

        public DbSet<Articulo> Articulo { get; set; }

        public DbSet<Factura> Encabezado { get; set; }


        public DbSet<DetalleFactura> Detalle_Factura { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //modelBuilder.Entity<Usuario>(entity =>
            //{
            //    entity.ToTable("Usuario");

            //    entity.Property(e => e.Id).HasColumnName("Id");

            //    entity.Property(e => e.UserName).HasColumnName("UserName")
            //        .IsRequired()
            //        .HasMaxLength(255)
            //        .IsUnicode(false);

            //    entity.Property(e => e.UserPassword).HasColumnName("UserPassword")
            //        .IsRequired()
            //        .HasMaxLength(255)
            //        .IsUnicode(false);
            //});

        }

    }
}
