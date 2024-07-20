<script setup lang="ts">
//
</script>

<template>
  <v-app>
    <v-layout>
      <NuxtLoadingIndicator />
      <v-navigation-drawer />
      <v-app-bar />
      <v-main>
        <slot></slot>
      </v-main>
      <LazyAppFooter app />
    </v-layout>
  </v-app>
</template>
