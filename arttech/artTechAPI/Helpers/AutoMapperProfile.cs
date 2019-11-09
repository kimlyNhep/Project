using AutoMapper;
using artTechAPI.Dto;
using artTechAPI.Models;

namespace artTechAPI.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}