import { z } from "zod";

const update = z.object({
  body: z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
  }),
});

const createPetValidationSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    name: z.string(),
    species: z.string(),
    breed: z.string(),
    age: z.number().int(),
    size: z.string(),
    location: z.string(),
    description: z.string(),
    temperament: z.string(),
    medicalHistory: z.string(),
    adoptionRequirements: z.string(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
});

const updatePetValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    species: z.string().optional(),
    breed: z.string().optional(),
    age: z.number().int().optional(),
    size: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    temperament: z.string().optional(),
    medicalHistory: z.string().optional(),
    adoptionRequirements: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
});

export const petValidationSchemas = {
  createPetValidationSchema,
  updatePetValidationSchema,
};
