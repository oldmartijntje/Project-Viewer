using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace ProjectsAPI
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string Description { get; set; } = String.Empty;
        public string Link { get; set; } = String.Empty;
        public string Status { get; set; } = String.Empty;
        public string Version { get; set; } = String.Empty;
        public string Type { get; set; } = String.Empty;
        public string Tumbnail { get; set; } = String.Empty;
        public string Creators { get; set; } = String.Empty;
        public string ReadmeUrl { get; set; } = String.Empty;
        public string UserFriendlyness { get; set; } = String.Empty;
        public string Customizebility { get; set; } = String.Empty;
        public string Scale { get; set; } = String.Empty;
        public string Data { get; set; } = String.Empty;

    }

}
