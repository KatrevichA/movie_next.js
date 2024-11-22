'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

type Props = {
    totalPages: number;
};

export default function Pagination({ totalPages }: Props) {
    const searchParams = useSearchParams();
    const page = searchParams.get('page') || 1;

    return (
        <section>
            <Link rel='prev' href={`/movies/?page=${+page > 1 ? +page - 1 : +page}`}>
                Previous
            </Link>
            <p>
                {page}/{totalPages}
            </p>
            <Link
                rel='next'
                href={`/movies/?page=${+page < totalPages ? +page + 1 : +page}`}
            >
                Next
            </Link>
        </section>
    );
}