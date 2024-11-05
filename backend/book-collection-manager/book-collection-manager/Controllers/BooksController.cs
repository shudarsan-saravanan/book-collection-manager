using book_collection_manager.Database;
using book_collection_manager.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace book_collection_manager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookDbContext BookDbContext;

        public BooksController(BookDbContext bookDbContext)
        {
            this.BookDbContext = bookDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetBook()
        {
            var books = await BookDbContext.Books.ToListAsync();
            return Ok(books);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBook([FromBody] Book bk)
        {
            bk.Id = new Guid();
            await BookDbContext.Books.AddAsync(bk);
            await BookDbContext.SaveChangesAsync();
            return Ok(bk);
        }

        [HttpPut]
        [Route("{id:guid}")]

        public async Task<IActionResult> UpdateBook([FromRoute] Guid id, [FromBody] Book bk)
        {
            bk.Id = new Guid();
            var book = await BookDbContext.Books.FirstOrDefaultAsync(a => a.Id == id);
            if (book != null)
            {
                book.Title = bk.Title;
                book.Author = bk.Author;
                book.Genre = bk.Genre;
                await BookDbContext.SaveChangesAsync();
                return Ok(bk);
            }
            else
            {
                return NotFound("Book not found");
            }
        }

    }
}
