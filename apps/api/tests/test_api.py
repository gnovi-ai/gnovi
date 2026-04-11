# SPDX-License-Identifier: AGPL-3.0-only
# Copyright (c) 2026 Gnovi Contributors

from gnovi.api import __version__


def test_version() -> None:
    assert __version__ == "0.1.0"
