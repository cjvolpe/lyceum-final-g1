// builtin 

// external
import type { FastifyInstance } from "fastify";
mport {Flashcard,Process,Task} from "../../frontend/src/lib/types.js"
import fastify from "fastify";

// internal

import {getNextCard, addFlashcard} from "../database";
const server = fastify();


export function setupRoutes(server: FastifyInstance) {
    server.get<("/flashcards", async(request,reply))>{};

    const next_flashcard = getNextCard();

    

    server.post<()>{};
}