using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using productsapi.Models;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Cors;

namespace productsapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IFileProvider _fileProvider;

        public ProductsController(IFileProvider fileProvider)
        {
            _fileProvider = fileProvider;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            return Ok(ReadProductJsonFile().AsEnumerable());
        }

        public IEnumerable<Product> ReadProductJsonFile()
        {
           var fileInfo = _fileProvider.GetFileInfo("wwwroot/products.json");

            using (StreamReader reader = new StreamReader(fileInfo.PhysicalPath))
            {
                var json = reader.ReadToEnd();
                var products = JsonConvert.DeserializeObject<List<Product>>(json);
                
                return products;
            }  
        }
    }
}
