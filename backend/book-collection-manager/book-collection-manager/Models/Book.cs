using System.ComponentModel.DataAnnotations;

namespace book_collection_manager.Models
{
    public class Book
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Genre { get; set; }

    }
}
