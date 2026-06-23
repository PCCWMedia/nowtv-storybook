import React, { useEffect, useState } from 'react';
import './Pagination.scss';

export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange?: (page: number) => void;
    className?: string;
    maxVisiblePages?: number;
}

const getVisiblePages = (
    totalPages: number,
    currentPage: number,
    maxVisiblePages: number,
): number[] => {
    const safeTotalPages = Math.max(1, totalPages);
    const visibleCount = Math.min(Math.max(1, maxVisiblePages), safeTotalPages);

    const half = Math.floor(visibleCount / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(safeTotalPages, start + visibleCount - 1);

    if (end - start + 1 < visibleCount) {
        start = Math.max(1, end - visibleCount + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const getMobilePageGroup = (totalPages: number, currentPage: number): number[] => {
    const safeTotalPages = Math.max(1, totalPages);
    const safeCurrentPage = Math.min(Math.max(1, currentPage), safeTotalPages);

    const groupSize = 3;
    const start = Math.floor((safeCurrentPage - 1) / groupSize) * groupSize + 1;
    const end = Math.min(start + groupSize - 1, safeTotalPages);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
    className = '',
    maxVisiblePages = 8,
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const handleViewportChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        setIsMobile(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleViewportChange);
        return () => {
            mediaQuery.removeEventListener('change', handleViewportChange);
        };
    }, []);

    const safeTotalPages = Math.max(1, totalPages);
    const safeCurrentPage = Math.min(Math.max(1, currentPage), safeTotalPages);

    const pages = isMobile
        ? getMobilePageGroup(safeTotalPages, safeCurrentPage)
        : getVisiblePages(safeTotalPages, safeCurrentPage, maxVisiblePages);
    const isPrevDisabled = safeCurrentPage === 1;
    const isNextDisabled = safeCurrentPage === safeTotalPages;

    const handlePageClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        page: number,
        disabled = false,
    ) => {
        event.preventDefault();
        if (disabled || page === safeCurrentPage) {
            return;
        }
        onPageChange?.(page);
    };

    return (
        <div className={`pagination-wrapper ${className}`.trim()}>
            <a
                href="#"
                className={isPrevDisabled ? 'disabled' : ''}
                aria-label="Previous page"
                aria-disabled={isPrevDisabled}
                onClick={(event) => handlePageClick(event, safeCurrentPage - 1, isPrevDisabled)}
            >
                <i className="icon-link-arrow" />
            </a>

            {pages.map((page) => (
                <a
                    key={page}
                    href="#"
                    className={page === safeCurrentPage ? 'active' : ''}
                    aria-current={page === safeCurrentPage ? 'page' : undefined}
                    onClick={(event) => handlePageClick(event, page)}
                >
                    {page}
                </a>
            ))}

            <a
                href="#"
                className={isNextDisabled ? 'disabled' : ''}
                aria-label="Next page"
                aria-disabled={isNextDisabled}
                onClick={(event) => handlePageClick(event, safeCurrentPage + 1, isNextDisabled)}
            >
                <i className="icon-link-arrow" />
            </a>
        </div>
    );
};

export default Pagination;