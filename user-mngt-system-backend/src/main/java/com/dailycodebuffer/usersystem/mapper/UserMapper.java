package com.dailycodebuffer.usersystem.mapper;

import org.mapstruct.Mapper;

import com.dailycodebuffer.usersystem.dto.UserDto;
import com.dailycodebuffer.usersystem.entity.UserEntity;

@Mapper(componentModel = "spring")
public interface UserMapper {
        UserDto toUserDto(UserEntity userEntity);
        UserEntity toUserEntity(UserDto userDto);
}
