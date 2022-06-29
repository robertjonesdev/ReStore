import { Card, CardMedia, CardContent, Button, CardActions, Typography, Avatar, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';
import { Product } from '../../app/models/product';

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor:'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            />
        <CardMedia
          component="img"
          image={product.pictureUrl}
          alt={product.name}
          sx={{ height: 140, backgroundSize: 'contain', objectFit:'contain', bgcolor:'primary.light' }}
        />
        <CardContent>
          <Typography gutterBottom color='secondary'>
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
          <Button 
            size="small" 
            component={Link}
            to={`/catalog/${product.id}`}
            >View</Button>
        </CardActions>
      </Card>
    )
}