import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Link from '../../../components/Link/Link';
import '../SearchResultPage.scss';

export interface SearchNoResultProps {
    heading?: string;
    description?: string;
    homeHref?: string;
    homeLabel?: string;
    wc2026Href?: string;
    subscriptionHref?: string;
    nowPlayerHref?: string;
    hboMaxHref?: string;
    supportHref?: string;
}

const SearchNoResult: React.FC<SearchNoResultProps> = ({
    heading = 'Oops...',
    description = "Looks like we can't find any results you're looking for.",
    homeHref = '?path=/story/pages-home--default',
    homeLabel = 'Back to Home',
    wc2026Href = '/wc2026',
    subscriptionHref = '/subscription',
    nowPlayerHref = '/nowplayer',
    hboMaxHref = '/hbomax',
    supportHref = '/support',
}) => {
    return (
        <div className="search-result-page search-no-result-page">
            <Header status="normal" />

            <main className="search-result-main search-no-result-main">
                <div className="container">

                    <h2 className="secondary-colour">{heading}</h2>
                    
                    <h4 id="search-no-result-title">{description}</h4>

                    <Link href={homeHref} label={homeLabel} className="btn primary search-no-result-cta" />

                    <div className="boxLink-wrapper">
                        <Link href={wc2026Href} label="WC 2026" className="" />
                        <Link href={subscriptionHref} label="Subscription" className="" />
                        <Link href={nowPlayerHref} label="Now Player" className="" />
                        <Link href={hboMaxHref} label="HBO Max" className="" />
                        <Link href={supportHref} label="Support" className="" />
                    </div>

                </div>
            </main>

            <Footer status="normal" />
        </div>
    );
};

export default SearchNoResult;
