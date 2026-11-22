self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/api/v1/rental/:path*"
      },
      {
        "source": "/api/v1/search/interpret"
      },
      {
        "source": "/api/v1/journeys/route"
      },
      {
        "source": "/api/v1/journeys/assistant"
      },
      {
        "source": "/api/v1/locations/nearby"
      },
      {
        "source": "/api/v1/locations/route"
      },
      {
        "source": "/api/v1/locations/search"
      },
      {
        "source": "/api/v1/localities"
      },
      {
        "source": "/api/v1/properties/search"
      },
      {
        "source": "/api/v1/properties/:id"
      },
      {
        "source": "/api/v1/properties/:id/nearby"
      },
      {
        "source": "/api/v1/properties/:id/route"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()