import React from 'react';
import { TabContent } from '../TabContent';
import { CoreTabContentData, TabContentData } from '@/types/TabContentTypes';
import { ContentCard } from '@/components/ContentCard';
import { mainHeaderClasses, divider, paragraphClasses, leftMainHeaderClasses } from '@/types/TabContentTypes';
import { CodeLink } from '@/data/CodeLink';
import { LinkWrapper } from '@/components/LinkWrapper';
import { SB } from '@/components/utils/SB';

const coverVidUrl = new URL('../assets/img/sql.png', import.meta.url).href;

export const SQLCoreTabContent: CoreTabContentData = {
  media: {
    type: 'image',
    src: coverVidUrl,
    alt: 'A diagram of an SQL database',
    dims: {h: 1682, w: 570}
  },
  title: "SQL Webcommerce",
  subtitle: "Fully featured SQL database.",
  link: "sql-webcommerce",
}

export const SQLTabContent: TabContentData = {
    ...SQLCoreTabContent,
    content: 
    <>
      <ContentCard>
        <p className={`${mainHeaderClasses}`}>
            {SQLCoreTabContent.subtitle}
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
            For a college project I created an SQL database, complete with triggers, procedures, and an EER diagram that demonstrates the relationships between the tables.
        </p>
      </ContentCard>
      <ContentCard>
        <p className={`${leftMainHeaderClasses}`}>
          Source Code
        </p>
        {divider}
        <p className={`${paragraphClasses}`}>
        The SQL file can be found <LinkWrapper url={`${CodeLink}SQL`} text="here"/>.
        </p>
      </ContentCard>

    </>
};