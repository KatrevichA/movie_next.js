'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {Button} from "@mui/material";

type Props = {
    totalPages: number,
    with_genre: string
};

export default function PaginationGenres({ totalPages,with_genre}: Props) {
    const searchParams = useSearchParams();
    const page = searchParams.get('page') || 1;

    // ---- ?with_genre=28

    return (
        <section>
            <Button color="secondary">
                <Link rel='prev' href={`/genres?with_genre=${with_genre}&page=${+page > 1 ? +page - 1 : +page}`}>
                    Previous
                </Link>
            </Button>

            <p>
                <Button variant="contained" color="success">
                    {page}
                </Button>
                <Button variant="contained" color="success">
                    {totalPages}
                </Button>
            </p>
            <Button  color="secondary">
                <Link rel='next' href={`/genres?with_genre=${with_genre}&page=${+page < totalPages ? +page + 1 : +page}`}>
                    Next
                </Link>
            </Button>

        </section>
    );
}