// src/components/PopularProducts.jsx
import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiString } from "../../services/apicalls";

export default function PopularProducts() {
  const [productData, setProductData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(apiString + "/shop/");
        setProductData(data.data); // Set the fetched data
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Card className="w-full">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Latest Products
          </Typography>
          <Typography
            as="a"
            href="/product"
            variant="small"
            color="blue"
            className="font-bold"
          >
            View all
          </Typography>
        </div>
        <div className="divide-y divide-gray-200">
          {productData
            .slice(0, 3)
            .map(({ id, name, email, sizes, imageUrl }, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-3 pt-3 last:pb-0 hover:cursor-pointer"
                onClick={() => navigate(`/singleproduct/${id}`)}
              >
                <div className="flex items-center gap-x-3">
                  <Avatar size="sm" src={imageUrl[0]} alt={name} />
                  <div>
                    <Typography as="a" color="blue-gray" variant="h6">
                      {name}
                    </Typography>
                    {/* <Typography variant="small" color="gray">
                      {email}
                    </Typography> */}
                  </div>
                </div>
                <Typography color="blue-gray" variant="h6">
                  Rs. {sizes[0].discountPrice}
                </Typography>
              </div>
            ))}
        </div>
      </CardBody>
    </Card>
  );
}
