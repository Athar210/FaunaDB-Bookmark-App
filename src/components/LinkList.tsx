import React from 'react';
import LinkCard from './LinkCard';
import '../pages/index.css';
export default function LinkList({ links, refreshLinks }) {
    return (
        <div>
            <h2 className="my-4">All Bookmarked Links</h2>
            {links &&
                links
                    .filter((link) => !link.archived)
                    .map((link) => (
                        <LinkCard
                            key={link._id}
                            link={link}
                            refreshLinks={refreshLinks}
                        />
                    ))}

            {links &&
                links
                    .filter((link) => link.archived)
                    .map((link) => (
                        <LinkCard
                            key={link._id}
                            link={link}
                            refreshLinks={refreshLinks}
                        />
                    ))}
        </div>
    );
}