import React from "react";

const SiteHeaderSkeleton = () => {
  return (
    <div className="pt-0 mt-0 header_"  style={styles.container} >
      <div style={styles.container} className="container">
        {/* Logo */}
        <div style={styles.logoSkeleton} />

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <div style={styles.searchInputSkeleton} />
          <div style={styles.searchIconSkeleton} />
        </div>

        {/* Icons */}
        <div style={styles.iconContainer}>
          <div style={styles.iconSkeleton} />
          <div style={styles.iconSkeleton} />
          <div style={styles.iconSkeleton} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "70px",
    padding: "10px 20px",
    background: "#1a1a1a",
  },
  logoSkeleton: {
    width: "180px",
    height: "40px",
    background: "#3a3a3a",
    borderRadius: "5px",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  searchInputSkeleton: {
    width: "200px",
    height: "35px",
    background: "#3a3a3a",
    borderRadius: "5px",
  },
  searchIconSkeleton: {
    width: "35px",
    height: "35px",
    background: "#3a3a3a",
    borderRadius: "5px",
  },
  iconContainer: {
    display: "flex",
    gap: "15px",
  },
  iconSkeleton: {
    width: "40px",
    height: "40px",
    background: "#3a3a3a",
    borderRadius: "5px",
  },
};

export default SiteHeaderSkeleton;
