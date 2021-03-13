import express from "express";
import { ambeeance } from 'ambeeance-client';

const server = express();

interface Config {
    name: string;
    other: string;
}

const config = ambeeance<Config>({
    name: 'string',
    other: 'nop',
});

server.get("/", (_, res) => {
    console.log(config);
    res.send(`Hello, ${config.name}!`);
});

server.listen(4001);
