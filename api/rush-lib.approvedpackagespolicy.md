<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/rush-lib](./rush-lib.md) &gt; [ApprovedPackagesPolicy](./rush-lib.approvedpackagespolicy.md)

## ApprovedPackagesPolicy class

This is a helper object for RushConfiguration. It exposes the "approvedPackagesPolicy" feature from rush.json.

<b>Signature:</b>

```typescript
export declare class ApprovedPackagesPolicy 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [browserApprovedPackages](./rush-lib.approvedpackagespolicy.browserapprovedpackages.md) |  | <code>ApprovedPackagesConfiguration</code> | Packages approved for usage in a web browser. This is the stricter of the two types, so by default all new packages are added to this file. |
|  [enabled](./rush-lib.approvedpackagespolicy.enabled.md) |  | <code>boolean</code> | Whether the feature is enabled. The feature is enabled if the "approvedPackagesPolicy" field is assigned in rush.json. |
|  [ignoredNpmScopes](./rush-lib.approvedpackagespolicy.ignorednpmscopes.md) |  | <code>Set&lt;string&gt;</code> | A list of NPM package scopes that will be excluded from review (e.g. <code>@types</code>) |
|  [nonbrowserApprovedPackages](./rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages.md) |  | <code>ApprovedPackagesConfiguration</code> | Packages approved for usage everywhere \*except\* in a web browser. |
|  [reviewCategories](./rush-lib.approvedpackagespolicy.reviewcategories.md) |  | <code>Set&lt;string&gt;</code> | A list of category names that are valid for usage as the RushConfigurationProject.reviewCategory field. This array will never be undefined. |

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `ApprovedPackagesPolicy` class.
