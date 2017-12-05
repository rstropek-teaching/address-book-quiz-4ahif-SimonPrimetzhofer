import { NO_CONTENT } from "http-status-codes";
import { Next, Request, Response } from "restify";
import { BadRequestError, NotFoundError } from "restify-errors";
import { contacts } from "./data";
import { STATUS_CODES } from "http";

export function deleteSingle(req: Request, res: Response, next: Next): void {
    const id = parseInt(req.params.id);
    if (id) {
        const contactIndex = contacts.findIndex(c => c.id === id);
        if (contactIndex !== -1) {
            contacts.splice(contactIndex, 1);
            res.statusCode=204;
            res.send("Successful operation");
            next();
        } else next(new NotFoundError("Person not found"));
    } else next(new BadRequestError("Invalid ID supplied"));
}