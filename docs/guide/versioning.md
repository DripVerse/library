---
id: versioning
title: Versioning
sidebar_label: 🪜 Versioning
hide_table_of_contents: false
---

Versioning is used to define various stages in development while also marking the progress. From minor to major changes can be easily followed throughout development process. 
We use versioning at the following places:
- API
- Libraries
- Web App

For most parts, we tend to follow [Semantic Versioning](https://semver.org/#semantic-versioning-200).

Given a version number **MAJOR.MINOR.PATCH**, increment the:

- **MAJOR** version when you make incompatible API changes. These will be announced officially and promoted. Necessary to have release names. Our very own steps. Hopefully, can be done annually. _Ground breaking changes._
- **MINOR** version when you add functionality in a backwards compatible manner. These will be announced but not promoted actively. Can appear on tech updates. Not necessary to have release names, but good to have. Hopefully, mid of every month. _New value addition._
- **PATCH** version when you make backwards compatible bug fixes. These will not be announced anywhere except as a bundle. Commonly named as Release Name Patch. Can be anytime, but at least 1 every week. _All fixes. Consmetic changes. Any small progress._
- **Pre-Release Label** version when you add a pre-release for testing purposes. These are not be used in production in any situation. Strictly, for testing. We will also be monitoring the use of this very closely. Our privacy policy will not be applicable on using this. It is optional. By default, the version will point to main releases.

So, in short, it looks something like:
![Semantic Versioning](/img/guide/v1.png "Semantic Versioning")

## More on SemVer(Semantic Versioning Specification) with our minor custom changes:

- A normal version number MUST take the form X.Y.Z where X, Y, and Z are non-negative integers, and MUST NOT contain leading zeroes. X is the major version, Y is the minor version, and Z is the patch version. Each element MUST increase numerically. For instance: 1.9.0 -> 1.10.0 -> 1.11.0.

- Once a versioned package has been released, the contents of that version MUST NOT be modified. Any modifications MUST be released as a new version.

- Major version zero (0.y.z) is for initial development. Anything MAY change at any time. The public API and SDK SHOULD NOT be considered stable. Docs may be outdated at times. We will happily oversee all integrations.

- Version 1.0.0 defines the public API. The way in which the version number is incremented after this release is dependent on this public API and how it changes.

- Patch version Z (x.y.Z | x > 0) MUST be incremented if only backwards compatible bug fixes are introduced. A bug fix is defined as an internal change that fixes incorrect behavior.

- Minor version Y (x.Y.z | x > 0) MUST be incremented if new, backwards compatible functionality is introduced to the public API. It MUST be incremented if any public API functionality is marked as deprecated. It MAY be incremented if substantial new functionality or improvements are introduced within the private code. It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented.

- Major version X (X.y.z | X > 0) MUST be incremented if any backwards incompatible changes are introduced to the public API. It MAY also include minor and patch level changes. Patch and minor versions MUST be reset to 0 when major version is incremented.

- A pre-release version MAY be denoted by appending a hyphen and a series of dot separated identifiers immediately following the patch version. Identifiers MUST comprise only ASCII alphanumerics and hyphens [0-9A-Za-z-]. Identifiers MUST NOT be empty. Numeric identifiers MUST NOT include leading zeroes. Pre-release versions have a lower precedence than the associated normal version. A pre-release version indicates that the version is unstable and might not satisfy the intended compatibility requirements as denoted by its associated normal version. Examples: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92, 1.0.0-x-y-z.–.

- Build metadata MAY be denoted by appending a plus sign and a series of dot separated identifiers immediately following the patch or pre-release version. Identifiers MUST comprise only ASCII alphanumerics and hyphens [0-9A-Za-z-]. Identifiers MUST NOT be empty. Build metadata MUST be ignored when determining version precedence. Thus two versions that differ only in the build metadata, have the same precedence. Examples: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85, 1.0.0+21AF26D3—-117B344092BD.

- Precedence refers to how versions are compared to each other when ordered.

  - Precedence MUST be calculated by separating the version into major, minor, patch and pre-release identifiers in that order (Build metadata does not figure into precedence).

  - Precedence is determined by the first difference when comparing each of these identifiers from left to right as follows: Major, minor, and patch versions are always compared numerically.

    Example: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.

  - When major, minor, and patch are equal, a pre-release version has lower precedence than a normal version:

    Example: 1.0.0-alpha < 1.0.0.

  - Precedence for two pre-release versions with the same major, minor, and patch version MUST be determined by comparing each dot separated identifier from left to right until a difference is found as follows:

    - Identifiers consisting of only digits are compared numerically.

    - Identifiers with letters or hyphens are compared lexically in ASCII sort order.

    - Numeric identifiers always have lower precedence than non-numeric identifiers.

    - A larger set of pre-release fields has a higher precedence than a smaller set, if all of the preceding identifiers are equal.

        Example: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

### API Versioning

While the API versioning follows a small variation of Semantic Versioning.
The APIs are prefixed semantic version with a "v" to indicate it is a version number.
Abbreviating "version" as "v" is often seen with version control. Example: git tag v1.2.3 -m "Release version 1.2.3", in which case "v1.2.3" is a tag name and the semantic version is "1.2.3".

So, it'd look something like:
<img src="/img/guide/apiv.png" data-canonical-src="https://library.dripverse.org/img/guide/apiv.png" width="50%" />

However, APIs are broadly mentioned in the route itself with only major version considerations. The SDK however might be tagged to a specific minor or even patch depending on scenario. The APIs are automatically switched to the latest version available.<br />
Example:
`/v1/...`, `/v2/...`, `/v3/...`, and so on...

## Changelog
We are following [Keep a Changelog](https://keepachangelog.com) as a convention.
A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project.
To make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project.

### Guiding Principles
- Changelogs are for humans, not machines.
- There should be an entry for every single version.
- The same types of changes should be grouped.
- Versions and sections should be linkable.
- The latest version comes first.
- The release date of each version is displayed.
- Mention whether you follow Semantic Versioning.

### Types of changes
- Added for new features.
- Changed for changes in existing functionality.
- Deprecated for soon-to-be removed features.
- Removed for now removed features.
- Fixed for any bug fixes.
- Security in case of vulnerabilities.

## Maintenance

While, we would want to support all past versions, sometimes it's critical to leave old habits due to security, advanced use, new standard/feature introduction and so on reasons. This is commonly followed practice of development process.
![Maintenance Flow](/img/guide/maintenance.jpg "Maintenance Flow")

## Deprecation

Deprecation is for features. If a particular feature changes completely, then that old feature is deprecated alongside the version which has it. The new base would be the new feature. All versions are to be maintained if no incompatible changes takes place.

## Announcements

Regardless of how tech updates happen, wider announcements is a business component. Announcements are made only for:

1. Business Milestones Reached
2. User Behaviour Changes
