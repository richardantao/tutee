import React from "react";
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from "../client/src/index";

export default function universal(req, res) {
    const branch = matchRoutes(routes, req.url);
    const promises = [];
}