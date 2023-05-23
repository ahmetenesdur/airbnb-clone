import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import FavoritesClient from "./FavoritesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="You don't have any favorites yet"
          subtitle="Click the heart icon on any listing to add it to your favorites list."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritesPage;
