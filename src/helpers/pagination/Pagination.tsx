'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {Button} from "@mui/material";

type Props = {
    totalPages: number;
};

export default function Pagination({ totalPages }: Props) {
    const searchParams = useSearchParams();
    const page = searchParams.get('page') || 1;

    return (
        <section>
            <Button color="secondary">
                <Link rel='prev' href={`/movies/?page=${+page > 1 ? +page - 1 : +page}`}>
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
                <Link rel='next' href={`/movies/?page=${+page < totalPages ? +page + 1 : +page}`}>
                    Next
                </Link>
            </Button>

        </section>
    );
}