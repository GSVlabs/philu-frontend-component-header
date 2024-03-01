RG Changelog
############

All notable changes to this project will be documented in this file.

The format is based on `Keep a Changelog <https://keepachangelog.com/en/1.0.0/>`_,
and this project adheres to customized Semantic Versioning e.g.: `quince-rg.1`

[Unreleased]
************

Added:
=====
* Added inclusion for cookie banner styles (RGOeX-26418)

Fix:
====
* Fix a typo for the Studio URL in the studio header dropdown (RGOeX-26419). This commit should be dropped when rebasing on upstream version 4.9.3+
* Fixup the cookie banner styles import introduced in RGOeX-26418 (RGOeX-26437)
* Fixed Studio Header in cases when course title is too long (RGOeX-26425)
    * We don't need to remove these fixes in the future, because all these modifications will be added when we reach header version 4.10.1 or higher. Let's delete this row after header version 4.10.1
* Removed not correct hover color on the Back to Instructor Dashboard button (RGOeX-26235)

[palm-rg.2] release 2023-12-01
******************************

Added:
=====
* Applied the same style to cookie banners on all MFE pages (RGOeX-26235)

[palm-rg.1] 2023-11-03 (Palm RG release)
****************************************

Added:
=====
* add CI checkers: add pre-commit-hooks, .gitlab-ci.yml, style checkers (RGOeX-24524)(MC-36)
* add Gamification links in the MFE header by env flag (RGOeX-24524)(RGOeX-24821)

Changed:
========
* add logo to header components from the brand package (RGOeX-24524)
* update translations from Translations (RGOeX-24524)
