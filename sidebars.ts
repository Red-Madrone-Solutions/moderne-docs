import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      type: 'html',
      value: '<br/><strong>User Documentation</strong>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Moderne Platform',
      link: {
        type: 'generated-index',
        title: 'Moderne Platform',
        description: 'Learn how to use the Moderne Platform.',
        slug: '/user-documentation/moderne-platform',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'Getting started',
          link: {
            type: 'generated-index',
            title: 'Getting started',
            description: 'Getting started guides.',
            slug: '/user-documentation/moderne-platform/getting-started',
            keywords: ['guides'],
          },
          items: [
            'user-documentation/moderne-platform/getting-started/running-your-first-recipe',
            'user-documentation/moderne-platform/getting-started/code-quality',
            'user-documentation/moderne-platform/getting-started/data-tables',
            'user-documentation/moderne-platform/getting-started/visualizations',
            'user-documentation/moderne-platform/getting-started/dev-center',
            'user-documentation/moderne-platform/getting-started/activity-view',
            'user-documentation/moderne-platform/getting-started/code-mods',
          ],
        },
        {
          type: 'category',
          label: 'How to guides',
          link: {
            type: 'generated-index',
            title: 'How to guides',
            description: 'How to guides.',
            slug: '/user-documentation/moderne-platform/how-to-guides',
            keywords: ['guides'],
          },
          items: [
            'user-documentation/moderne-platform/how-to-guides/new-recipe-builder',
            'user-documentation/moderne-platform/how-to-guides/introduction-to-type-aware-code-search',
            'user-documentation/moderne-platform/how-to-guides/moderne-platform-search',
            'user-documentation/moderne-platform/how-to-guides/recipe-execution-and-commits-with-graphql',
            'user-documentation/moderne-platform/how-to-guides/accessing-the-moderne-api',
            'user-documentation/moderne-platform/how-to-guides/find-pii',
            'user-documentation/moderne-platform/how-to-guides/managing-user-configured-organizations',
            'user-documentation/moderne-platform/how-to-guides/create-api-access-tokens',
            'user-documentation/moderne-platform/how-to-guides/preconditions',
            'user-documentation/moderne-platform/how-to-guides/track-migrations',
            'user-documentation/moderne-platform/how-to-guides/transitive-dependencies',
            'user-documentation/moderne-platform/how-to-guides/how-to-find-method-invocations-based-on-a-pattern',
            'user-documentation/moderne-platform/how-to-guides/how-to-gain-a-high-level-overview-of-your-codebase-using-clustering',
          ],
        },
        {
          type: 'category',
          label: 'References',
          link: {
            type: 'generated-index',
            title: 'References',
            description: 'Reference docs.',
            slug: '/user-documentation/moderne-platform/references',
            keywords: ['references'],
          },
          items: [
            'user-documentation/moderne-platform/references/moderne-tokens',
            'user-documentation/moderne-platform/references/create-scm-access-tokens',
            'user-documentation/moderne-platform/references/user-reports',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Moderne CLI',
      link: {
        type: 'generated-index',
        title: 'Moderne CLI',
        description: 'Learn how to use the Moderne CLI.',
        slug: '/user-documentation/moderne-cli',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'Getting started',
          link: {
            type: 'generated-index',
            title: 'Getting started',
            description: 'Getting started guides.',
            slug: '/user-documentation/moderne-cli/getting-started',
            keywords: ['guides'],
          },
          items: [
            'user-documentation/moderne-cli/getting-started/cli-intro',
            'user-documentation/moderne-cli/getting-started/cli-dev-center',
            'user-documentation/moderne-cli/getting-started/moderne-cli-license',
          ],
        },
        {
          type: 'category',
          label: 'How to guides',
          link: {
            type: 'generated-index',
            title: 'How to guides',
            description: 'How to guides.',
            slug: '/user-documentation/moderne-cli/how-to-guides',
            keywords: ['guides'],
          },
          items: [
            'user-documentation/moderne-cli/how-to-guides/layer-config-cli',
            'user-documentation/moderne-cli/how-to-guides/jdk-selection-and-config',
            'user-documentation/moderne-cli/how-to-guides/air-gapped-cli-install',
            'user-documentation/moderne-cli/how-to-guides/execute-user-supplied-commands',
            'user-documentation/moderne-cli/how-to-guides/clone-and-sync',
            'user-documentation/moderne-cli/how-to-guides/on-prem-scm-config',
            'user-documentation/moderne-cli/how-to-guides/build-steps',
            'user-documentation/moderne-cli/how-to-guides/build-partitions',
            'user-documentation/moderne-cli/how-to-guides/bazel-support',
            'user-documentation/moderne-cli/how-to-guides/cli-upgrade',
            'user-documentation/moderne-cli/how-to-guides/ssh-key',
          ],
        },
        'user-documentation/moderne-cli/cli-reference',
        'user-documentation/moderne-cli/faq',
      ],
    },
    {
      type: 'category',
      label: 'Moderne Plugin for JetBrains IDEs',
      link: {
        type: 'generated-index',
        title: 'Moderne Plugin for JetBrains IDEs',
        description: 'Learn how to use the Moderne Plugin for JetBrains IDES.',
        slug: '/user-documentation/moderne-ide-integration',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'How to guides',
          link: {
            type: 'generated-index',
            title: 'How to guides',
            description: 'How to guides.',
            slug: '/user-documentation/moderne-ide-integration/how-to-guides',
            keywords: ['guides'],
          },
          items: [
            'user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install',
            'user-documentation/moderne-ide-integration/how-to-guides/code-search',
            'user-documentation/moderne-ide-integration/how-to-guides/creating-recipes',
            'user-documentation/moderne-ide-integration/how-to-guides/debugging-recipes',
          ],
        },
        {
          type: 'category',
          label: 'Reference',
          link: {
            type: 'generated-index',
            title: 'Reference',
            description: 'Reference docs for Moderne IDE integrations.',
            slug: '/user-documentation/moderne-ide-integration/reference',
            keywords: ['reference'],
          },
          items: [
            'user-documentation/moderne-ide-integration/reference/code-search-actions',
            'user-documentation/moderne-ide-integration/reference/refactor-actions',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Moderne DX',
      link: {
        type: 'generated-index',
        title: 'Moderne DX',
        description: 'Learn how to use the Moderne DX.',
        slug: '/user-documentation/moderne-dx',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'How to guides',
          link: {
            type: 'generated-index',
            title: 'How to guides',
            description: 'How to guides.',
            slug: '/user-documentation/moderne-dx/how-to-guides',
            keywords: ['guides'],
          },
          items: [
            'user-documentation/moderne-dx/how-to-guides/syncing-recipes-with-moderne-dx',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Workshops',
      link: {
        type: 'generated-index',
        title: 'Workshops',
        description: 'Moderne workshops.',
        slug: '/user-documentation/workshops',
        keywords: ['workshops'],
      },
      items: [
        'user-documentation/workshops/recipe-authoring'
      ],
    },
    'user-documentation/community-office-hours',
    {
      type: 'html',
      value: '<br/><strong>Administrator Documentation</strong>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Moderne Platform',
      link: {
        type: 'generated-index',
        title: 'Moderne Platform',
        description: 'Learn how to use the Moderne Platform.',
        slug: '/administrator-documentation/moderne-platform',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'Getting started',
          link: {
            type: 'generated-index',
            title: 'Getting started',
            description: 'Getting started guides.',
            slug: '/administrator-documentation/moderne-platform/getting-started',
            keywords: ['guides'],
          },
          items: [
            'administrator-documentation/moderne-platform/getting-started/proof-of-value',
            'administrator-documentation/moderne-platform/getting-started/admin-pages',
          ],
        },
        {
          type: 'category',
          label: 'How to guides',
          link: {
            type: 'generated-index',
            title: 'How to guides',
            description: 'How to guides.',
            slug: '/administrator-documentation/moderne-platform/how-to-guides',
            keywords: ['guides'],
          },
          items: [
            'administrator-documentation/moderne-platform/how-to-guides/mass-ingest',
            {
              type: 'category',
              label: 'Moderne Agent',
              link: {
                type: 'generated-index',
                title: 'Moderne Agent',
                description: 'Moderne Agent configuration docs.',
                slug: '/administrator-documentation/moderne-platform/agent-configuration',
                keywords: ['guides'],
              },
              items: [
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-config',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-azure-devops-services',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-bitbucket-to-agent',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-bitbucket-cloud-to-agent',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-github',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-gitlab',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-maven-repository-access',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-artifactory-access',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configuring-artifactory-with-recipes',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-pypi-access-visualizations',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-organizations-service',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-generic-http-tools-for-use-in-recipes',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-strict-recipe-sources',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-client-ssl-certificates',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-to-connect-to-moderne-via-an-http-proxy',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-variables',
                'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/multi-tenant-private-recipes',
              ],
            },
            'administrator-documentation/moderne-platform/how-to-guides/organizations-service',
            'administrator-documentation/moderne-platform/how-to-guides/dev-center',
            'administrator-documentation/moderne-platform/how-to-guides/create-visualization',
            'administrator-documentation/moderne-platform/how-to-guides/importing-external-recipes',
            'administrator-documentation/moderne-platform/how-to-guides/lst-cleanup',
          ],
        },
        {
          type: 'category',
          label: 'References',
          link: {
            type: 'generated-index',
            title: 'References',
            description: 'Moderne Platform reference docs.',
            slug: '/administrator-documentation/moderne-platform/references',
            keywords: ['reference'],
          },
          items: [
            'administrator-documentation/moderne-platform/references/authentication',
            'administrator-documentation/moderne-platform/references/reporting',
            'administrator-documentation/moderne-platform/references/architecture',
            'administrator-documentation/moderne-platform/references/flow',
            'administrator-documentation/moderne-platform/references/user-roles',
            'administrator-documentation/moderne-platform/references/github-permissions',
            'administrator-documentation/moderne-platform/references/how-moderne-applies-changes',
            'administrator-documentation/moderne-platform/references/routing-requests-to-agents',
            'administrator-documentation/moderne-platform/references/how-ast-artifacts-are-produced',
            'administrator-documentation/moderne-platform/references/supported-scms',
            'administrator-documentation/moderne-platform/references/lossless-semantic-trees',
            {
              type: 'link',
              label: 'GraphQL API reference',
              href: 'https://studio.apollographql.com/public/Moderne-SaaS-API/variant/current',
            },
          ],
        },
        'administrator-documentation/moderne-platform/faq',
      ],
    },
    {
      type: 'category',
      label: 'Moderne DX',
      link: {
        type: 'generated-index',
        title: 'Moderne DX',
        description: 'Learn how to use the Moderne DX.',
        slug: '/administrator-documentation/moderne-DX',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'How to guides',
          link: {
            type: 'generated-index',
            title: 'How to guides',
            description: 'How to guides',
            slug: '/administrator-documentation/moderne-dx/how-to-guides',
            keywords: ['guides'],
          },
          items: [
            'administrator-documentation/moderne-dx/how-to-guides/mass-ingest-and-run-dx',
            'administrator-documentation/moderne-dx/how-to-guides/dx-configuration',
            'administrator-documentation/moderne-dx/how-to-guides/devcenter-yaml',
            'administrator-documentation/moderne-dx/how-to-guides/configure-dx-with-maven-repository-access',
            'administrator-documentation/moderne-dx/how-to-guides/configure-dx-with-artifactory-access',
            'administrator-documentation/moderne-dx/how-to-guides/configure-dx-with-artifactory-recipes',
            'administrator-documentation/moderne-dx/how-to-guides/configure-dx-with-on-prem-scm',
            'administrator-documentation/moderne-dx/how-to-guides/configure-dx-organizations',
            'administrator-documentation/moderne-dx/how-to-guides/configure-dx-with-strict-recipe-sources',
            'administrator-documentation/moderne-dx/how-to-guides/deploying-recipe-artifacts-in-moderne-dx',
            'administrator-documentation/moderne-dx/how-to-guides/configure-dx-ssl',
            'administrator-documentation/moderne-dx/how-to-guides/dx-variables',
          ],
        },
        {
          type: 'category',
          label: 'References',
          link: {
            type: 'generated-index',
            title: 'References',
            description: 'Moderne DX reference docs.',
            slug: '/administrator-documentation/moderne-dx/references',
            keywords: ['reference'],
          },
          items: [
            'administrator-documentation/moderne-dx/references/moderne-dx-architecture',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Licensing',
      link: {
        type: 'generated-index',
        title: 'Licensing',
        description: 'Moderne licensing docs.',
        slug: '/administrator-documentation/licensing/',
        keywords: ['license'],
      },
      items: [
        'administrator-documentation/licensing/overview',
        'administrator-documentation/licensing/moderne-source-available-license',
      ],
    },
    {
      type: 'html',
      value: '<br/><strong>Releases</strong>',
      defaultStyle: true,
    },
    'releases/agent-releases',
    'releases/cli-releases',
    'releases/changelog',
    'releases/cli-dx',
  ]
};

export default sidebars;
