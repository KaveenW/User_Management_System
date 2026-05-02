package com.dailycodebuffer.usersystem.service;

import java.util.List;

import com.dailycodebuffer.usersystem.dto.UserDto;

public interface UserService {

    UserDto saveUser(UserDto userDto);

    List<UserDto> getAllUsers();

    UserDto getUserById(Long id);

    void deleteUser(Long id);

    UserDto updateUser(Long id, UserDto userDto);
}
