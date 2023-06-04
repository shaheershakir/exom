import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "w8g1tn8k",
    dataset: "production",
    title: "Ecommerce Website",
    apiVersion: "2023-06-04",
    basePath: "/admin",
    plugins: [deskTool()],
})

export default config;