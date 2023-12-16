import { WikipideaPage } from "./wikipidea-page"
export interface WikipediaResponce {
    query: {
        search: WikipideaPage[]
    }
}