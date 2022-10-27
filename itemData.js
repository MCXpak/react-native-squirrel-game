import { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
// Sample Data

export const itemData = [
    {
      icon: (
        <TouchableOpacity>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
          }}
        />
        </TouchableOpacity>
      )
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
          }}
        />
      )
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
          }}
        />
      )
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
          }}
        />
      )
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
          }}
        />
      )
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
          }}
        />
      )
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
          }}
        />
      )
    },
  ];
