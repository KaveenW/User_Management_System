package com.dailycodebuffer.usersystem.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.dailycodebuffer.usersystem.dto.UserDto;
import com.dailycodebuffer.usersystem.entity.UserEntity;
import com.dailycodebuffer.usersystem.mapper.UserMapper;
import com.dailycodebuffer.usersystem.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }
    @Override
    public UserDto saveUser(UserDto userDto) {
        // 1. Convert UserDto to UserEntity
        UserEntity userEntity = userMapper.toUserEntity(userDto);

        // 2. Save UserEntity to the database
        UserEntity savedUserEntity = userRepository.save(userEntity);
        
        // 3. Convert the saved UserEntity back to UserDto and return
        return userMapper.toUserDto(savedUserEntity);
    }
    @Override
    public List<UserDto> getAllUsers() {
        List<UserEntity> userEntity = userRepository.findAll();

        return userEntity.stream().map(user -> userMapper.toUserDto(user)).collect(Collectors.toList());

    }
    @Override
    public UserDto getUserById(Long id) {
        UserEntity user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Account not found"));
        return userMapper.toUserDto(user);
    }
    @Override
    public void deleteUser(Long id) {
        if(!userRepository.existsById(id)){
            throw new RuntimeException("Account not found");
        }
        userRepository.deleteById(id);
    }
    @Override
    public UserDto updateUser(Long id, UserDto userDto) {
        UserEntity userEntity = userRepository.findById(id). orElseThrow(() -> new RuntimeException("Account not found"));
        userEntity.setEmailId(userDto.getEmailId());
        userEntity.setFirstName(userDto.getFirstName());
        userEntity.setLastName(userDto.getLastName());

        UserEntity updatedEntity = userRepository.save(userEntity);
        return userMapper.toUserDto(updatedEntity);
    }

}
