using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectsAPI.Data;

namespace ProjectsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly DataContext _context;
        public ProjectController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Project>>> GetProjects()
        {
            return Ok(await _context.Projects.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Project>>> CreateProject(Project project)
        {
            _context.Projects.Add(project);
            await _context.SaveChangesAsync(); 

            return Ok(await _context.Projects.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Project>>> updateProject(Project project)
        {
            var dbProject = await _context.Projects.FindAsync(project.Id);      
            if (dbProject == null)
            {
                return BadRequest("Project not found");
            }

            dbProject.Name = project.Name;
            dbProject.Description = project.Description;
            dbProject.Link = project.Link;
            dbProject.Status = project.Status;
            dbProject.Version = project.Version;
            dbProject.Type = project.Type;
            dbProject.Tumbnail = project.Tumbnail;
            dbProject.Creators = project.Creators;
            dbProject.ReadmeUrl = project.ReadmeUrl;
            dbProject.UserFriendlyness = project.UserFriendlyness;
            dbProject.Customizebility = project.Customizebility;
            dbProject.Scale = project.Scale;
            dbProject.Data= project.Data;

            await _context.SaveChangesAsync();

            return Ok(await _context.Projects.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Project>>> DeleteProject(int id)
        {
            var dbProject = await _context.Projects.FindAsync(id);
            if (dbProject == null)
            {
                return BadRequest("Project not found");
            }

            _context.Projects.Remove(dbProject);
            await _context.SaveChangesAsync();

            return Ok(await _context.Projects.ToListAsync());
        }
    }
}
