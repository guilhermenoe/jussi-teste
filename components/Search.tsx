
'use client'
import { IoMdSearch } from "react-icons/io";
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// Interface que descreve o formato dos dados retornados pela API do Google
interface GoogleSearchResult {
    link: string;
    title: string;
    snippet: string;
}

// apikey: AIzaSyBsqXy2AwOsal6XxchLrD1GNLQ5JLSOFr8
// id mecanismo de pesquisa: b3a7664f48d5c45f8

const API_KEY = 'AIzaSyBsqXy2AwOsal6XxchLrD1GNLQ5JLSOFr8';
const CX = 'b3a7664f48d5c45f8';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<GoogleSearchResult[]>([]);
    const resultsRef = useRef<HTMLDivElement | null>(null); // Tipando resultsRef como um elemento HTMLDivElement ou null

    useEffect(() => {
        if (query) {
            axios
                .get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query}`)
                .then((response) => {
                    if (response.data.items) {
                        setResults(response.data.items);
                    } else {
                        console.error('Erro ao buscar resultados');
                    }
                })
                .catch((error) => {
                    console.error('Erro na solicitação:', error);
                });
        }
    }, [query]);

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearchButtonClick = () => {
        // Executa a pesquisa quando o botão é clicado
        if (query) {
            axios
                .get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query}`)
                .then((response) => {
                    if (response.data.items) {
                        setResults(response.data.items);
                    } else {
                        console.error('Erro ao buscar resultados');
                    }
                })
                .catch((error) => {
                    console.error('Erro na solicitação:', error);
                });
        }
    };

    // Adiciona um ouvinte de eventos para fechar os resultados quando ocorre um clique fora deles
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
                closeResults();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeResults = () => {
        setResults([]);
    };

    return (
        <>
            <div className="relative">
                <div className="hidden md:w-full md:flex items-center bg-transparent max-w-[240px] rounded-full h-10 pl-6">
                    <input
                        type="search"
                        value={query}
                        onChange={handleQueryChange}
                        className="placeholder-transparent focus:border-transparent font-medium focus:outline-none focus:ring-transparent focus:ring-0 h-full w-[85%] bg-transparent rounded-full placeholder:text-slate-700 text-base pl-4 placeholder-red-500"
                        placeholder="buscar"
                    />
                    <button type="button" className="h-full rounded-full bg-transparent absolute right-0" onClick={handleSearchButtonClick}>
                        <IoMdSearch size={24} />
                    </button>
                </div>
                <div className="md:absolute top-[100%] left-1/2 transform translate-x-[-50%] md:w-full md:bg-white md:rounded-lg md:shadow-md md:max-h-48 md:overflow-y-auto z-[999999]" ref={resultsRef}>
                    <div className="max-h-48 overflow-y-auto">
                        {results.slice(0, 4).map((result) => (
                            <div key={result.link} className="p-4 border-b border-gray-300">
                                <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                                    <h2 className="text-base font-medium">{result.title}</h2>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;




