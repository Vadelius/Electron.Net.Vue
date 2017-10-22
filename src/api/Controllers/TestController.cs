using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{

    [Route("api/[controller]")]
    public class TestController : Controller
    {
        // GET api/test
        [HttpGet]
        public IActionResult Get()
        {
            var result = new [] {
                new { FirstName = "Victor", LastName = "Vadelius" },
            };

            return Ok(result);
        }
    }
}