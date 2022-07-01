/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import type {Props} from '@theme/BlogPostItem';

export default function BlogPostItemContainer(props: Props): JSX.Element {
  const {withBaseUrl} = useBaseUrlUtils();
  const {children, frontMatter, assets, isBlogPostPage = false} = props;
  const image = assets.image ?? frontMatter.image;
  return (
    <article
      className={!isBlogPostPage ? 'margin-bottom--xl' : undefined}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting">
      {image && (
        <meta itemProp="image" content={withBaseUrl(image, {absolute: true})} />
      )}
      {children}
    </article>
  );
}